import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrl: './matches-page.component.css',
})
export class MatchesPageComponent implements OnInit {
  @Input() User: { firstName: string };

  ngOnInit() {}
}
