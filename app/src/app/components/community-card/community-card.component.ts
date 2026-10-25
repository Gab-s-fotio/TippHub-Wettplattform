import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.scss']
})
export class CommunityCardComponent {
  @Input() name!: string;
  @Input() beschreibung!: string;
  @Input() bildUrl!: string;
}
