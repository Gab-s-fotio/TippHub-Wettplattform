export class Community {
  name: string;
  beschreibung: string;
  teilnehmer: string[];
  bildUrl: string;

  constructor(name: string, beschreibung: string, teilnehmer: string[] = [], bildUrl: string = '') {
    this.name = name;
    this.beschreibung = beschreibung;
    this.teilnehmer = teilnehmer;
    this.bildUrl = bildUrl;
  }
}
