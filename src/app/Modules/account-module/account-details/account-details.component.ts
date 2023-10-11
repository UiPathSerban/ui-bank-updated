import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from 'src/app/shared/services/accounts.service';
import { Transaction } from 'src/app/shared/models/transaction';
import { LoanService } from 'src/app/shared/services/loan.service';
import { CsvDataService } from 'src/app/file-actions/csv-data.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
const pdf = pdfMake;
pdf.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  public sub: any;
  public accountID: string;
  public validAccount: boolean;
  public accountBalance: string;
  public todayDate: string;
  public today: Date = new Date();
  public amounts: string[];
  public descriptions: string[];
  public accountName: string;

  public Transactions: Transaction[];

  displayedColumns: string[];
  dataSource: MatTableDataSource<Transaction>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _location: Location, private route: ActivatedRoute, private loanService: LoanService, private accountsService: AccountsService) { }

  ngOnInit() {
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0') // January is 0
    var yyyy = this.today.getFullYear();
    this.todayDate = `${mm}/${dd}/${yyyy}`;

    this.dataSource = new MatTableDataSource<Transaction>();
    this.displayedColumns = ['date', 'amount', 'balance', 'description'];

    this.sub = this.route.params.subscribe({
      next: (params) => {
        this.accountID = params['accountID'];
        this.accountBalance = params['balance'];
        this.accountName = params['accountName'];
      },
      error: (err) => console.warn(err)
    });
    this.accountsService.getTransactions(this.accountID).subscribe({
      next: (transactions: Transaction[]) => {
        this.Transactions = transactions;
        console.log(this.Transactions.length);
        this.dataSource = new MatTableDataSource<Transaction>(transactions.reverse());
        this.amounts = transactions.map(a => a.amount.toFixed(2));
        this.descriptions = transactions.map(a => a.description);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  downloadCSV() {
    let filteredResults = this.Transactions.map(({ type, description, amount, balance, date }) => ({ type, description, amount, balance, date }));

    const mutatetdResults = filteredResults.map(
      function (result) {
        result.amount = parseFloat(result.amount.toFixed(2));
        result.balance = parseFloat(result.balance.toFixed(2));
        console.log(parseFloat(result.amount.toFixed(2)))
        return result;
      })


    CsvDataService.exportToCsv('transactionData_' + this.todayDate + '.csv', mutatetdResults);
  }

  generatePdf() {
    const bodyData = this.createTableData();

    var dd = {
      content: [
        {
          text: 'UiBank Statement of Accounts\n\n\n',
          style: 'header',
          color: '#0067DF',
          alignment: 'right'
        },
        {
          text: 'Account No: ' + this.accountID + "\nName of Account: " + this.accountName,
          alignment: 'right'
        },
        {
          text: 'New York account terms and conditions apply',
          color: '#888888',
          fontSize: 12,
          alignment: 'right'
        },
        {
          text: 'UiBank\n',
          style: 'header'
        },
        {
          text: '90 Park Ave\n 20th floor\n New York, NY 10016\n\n\n'
        },
        {
          text: 'Transaction History \n\n',
          style: 'header'
        },
        {
          table: {
            widths: [80, 200, 80, '*'],
            body: bodyData
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        bigger: {
          fontSize: 15,
          italics: true
        },
      }
    }

    var docDefinition = {
      content: [
        {
          text: 'This is an sample PDF printed with pdfMake'
        }
      ]
    };

    pdfMake.createPdf(dd).open();

  }

  createTableData(): any {
    var bodyData: string[][] = [];
    var dataRow: string[] = [];

    dataRow.push("Date");
    dataRow.push("Description");
    dataRow.push("Amount");
    dataRow.push("Balance");

    bodyData.push(dataRow);

    this.Transactions.forEach(function (sourceRow) {
      var dataRow: string[] = [];

      const tempDate = sourceRow.date.split("T");
      const tempDateSubstring = tempDate[0];
      const day = tempDateSubstring.split("-")[2];
      const month = tempDateSubstring.split("-")[1];
      const year = tempDateSubstring.split("-")[0];

      dataRow.push(month + "/" + day + "/" + year);
      if (sourceRow.description === undefined || sourceRow.description === "") {
        dataRow.push(" ");
      } else {
        dataRow.push(sourceRow.description);
      }

      if (sourceRow.type === "debit") {
        dataRow.push("-" + sourceRow.amount);
      } else {
        dataRow.push(sourceRow.amount.toFixed(2));
      }

      dataRow.push(sourceRow.balance.toFixed(2));

      bodyData.push(dataRow);
    })

    return bodyData;
  }


  backButton() {
    this._location.back();
  }
}
