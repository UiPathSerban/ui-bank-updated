import { SelectionModel } from '@angular/cdk/collections';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from 'src/app/shared/services/accounts.service';
import { Transaction } from 'src/app/shared/models/transaction';

@Component({
  selector: 'app-dispute-account-view',
  templateUrl: './dispute-account-view.component.html',
  styleUrls: ['./dispute-account-view.component.scss']
})
export class DisputeAccountViewComponent implements OnInit, AfterViewInit {
  public accountId: string;
  public amounts: string[];
  public descriptions: string[];
  public transactions: Transaction[];
  public disputedAmounts: string[];
  public disputedDescriptions: string[];
  public disputedTransactions: Transaction[];
  public resolvedAmounts: string[];
  public resolvedDescriptions: string[];
  public resolvedTransactions: Transaction[];
  public sub: any;
  public toBeDisputedTransactions: Transaction[];

  disputedDisplayedColumns: string[];
  resolvedDisplayedColumns: string[];
  toBeDisputedDisplayedColumns: string[];

  disputedDataSource: MatTableDataSource<Transaction>;
  resolvedDataSource: MatTableDataSource<Transaction>;
  toBeDisputedDataSource: MatTableDataSource<Transaction>;

  @ViewChild('toBeDisputedPaginator', { static: false }) toBeDisputedPaginator: MatPaginator;
  @ViewChild('resolvedPaginator', { static: false }) resolvedPaginator: MatPaginator;
  @ViewChild('disputePaginator', { static: false }) disputePaginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  selection = new SelectionModel<Transaction>(true, []);

  constructor(private accountService: AccountsService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => this.accountId = params['accountId']);

    this.disputedDataSource = new MatTableDataSource<Transaction>([])
    this.resolvedDataSource = new MatTableDataSource<Transaction>([]);
    this.toBeDisputedDataSource = new MatTableDataSource<Transaction>([]);

    this.disputedTransactions = [];
    this.resolvedTransactions = [];
    this.toBeDisputedTransactions = [];

    this.disputedDisplayedColumns = ['status', 'date', 'amount', 'balance', 'description'];
    this.resolvedDisplayedColumns = ['status', 'date', 'amount', 'balance', 'description'];
    this.toBeDisputedDisplayedColumns = ['select', 'date', 'amount', 'balance', 'description'];

    this.getDisputedTransactions(this.accountId);
    this.getTransactions(this.accountId);

  }

  getDisputedTransactions(accountID) {
    this.accountService.getDisputedTransactions(accountID).subscribe({
      next: (transactions: Transaction[]) => {
        this.disputedDataSource = new MatTableDataSource<Transaction>(transactions.reverse());
        this.disputedTransactions = transactions;
        this.disputedAmounts = transactions.map(a => a.amount.toString());
        this.disputedDescriptions = transactions.map(a => a.description);
        this.disputedDataSource.paginator = this.disputePaginator;
        this.disputedDataSource.sort = this.sort;
      }
    });
  }

  getTransactions(accountID) {
    this.accountService.getTransactions(accountID).subscribe({
      next: (transactions: Transaction[]) => {
        this.transactions = transactions;
        this.resolvedTransactions = transactions;
        this.resolvedTransactions = this.resolvedTransactions.filter(a => a.dispute === "resolved" || a.dispute === "resolved-refunded");
        this.transactions = this.transactions.filter(a => a.dispute === "ok");
        this.toBeDisputedDataSource = new MatTableDataSource<Transaction>(this.transactions.reverse());
        this.resolvedDataSource = new MatTableDataSource<Transaction>(this.resolvedTransactions.reverse());
        this.amounts = transactions.map(a => a.amount.toString());
        this.descriptions = transactions.map(a => a.description);
        this.toBeDisputedDataSource.paginator = this.toBeDisputedPaginator;
        this.toBeDisputedDataSource.sort = this.sort;
      }
    });
  }

  ngAfterViewInit() {
    this.disputedDataSource.paginator = this.disputePaginator;
    this.disputedDataSource.sort = this.sort;
    this.resolvedDataSource.paginator = this.resolvedPaginator;
    this.resolvedDataSource.sort = this.sort;
    this.toBeDisputedDataSource.paginator = this.toBeDisputedPaginator;
    this.toBeDisputedDataSource.sort = this.sort;
  }

  backButton() { this._location.back(); }

  disputeTransactions() {
    this.selection.selected.forEach(obj => {
      const transactionTemp = obj;
      transactionTemp.dispute = 'reported';
      this.accountService.disputeTransaction(transactionTemp).subscribe({
        next: (transaction: Transaction) => { console.log(transaction); }
      });
    })
    window.location.reload();
  }

  /** Whether the number of selected elements matches the total number of rows */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.toBeDisputedDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected. otherwise clear selection.  */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.toBeDisputedDataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Transaction): string {
    if (!row) {
      return "${this.isAllSelected() ? 'select' : 'deselect'} all";
    }

    return "${this.selection.isSelected(row) ? 'deselect' : 'select'} row";
  }

}
