import { Component } from '@angular/core';

export interface notes {

  title: string;
  status: string;

}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  newNote = { title: '', status: '' };
  notes: { title: string, status: string }[] = [];
  activeTab: string = 'ALL';

  get filteredNotes(): { title: string, status: string }[] {
    if (this.activeTab === 'ALL') {
      return this.notes;
    } else {
      return this.notes.filter(note => note.status === this.activeTab);
    }
  }

  addNote() {
    if (this.newNote.title && this.newNote.status) {
      this.notes.push({ title: this.newNote.title, status: this.newNote.status });
      this.newNote.title = '';
      this.newNote.status = '';
    } else {
      alert('Please enter both title and status.');
    }
  }

  changeTab(tab: string) {
    this.activeTab = tab;
  }
}
