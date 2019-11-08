import {Component, OnInit} from '@angular/core';
import {Student} from '../models/Student';
import {Subject} from '../models/Subject';
import {MatDialog} from '@angular/material';
import {SubjectService} from '../services/subject.service';
import {NewSubjectComponent} from '../añadir-subject/new-subject.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: Subject[];
  currentSubject: Subject;
  currentStudent: Student;

  constructor(private subjectService: SubjectService,
              public dialog: MatDialog) { }
  ngOnInit() {
    this.updateInfo();
  }
  updateInfo() {
    this.subjectService.getSubjects().subscribe(subjects => {
      this.subjects = []; this.subjects = subjects;
      if (this.currentSubject) {
        this.currentSubject = subjects.find(s => s.name === this.currentSubject.name);
      }
    });
  }
  public subjectSelect(subject){
    this.currentSubject = subject;
  }
  public addSubject() {
    const dialogRef = this.dialog.open(NewSubjectComponent, {
      width: '50%',
      height: '40%',
    });
    dialogRef.afterClosed().subscribe(() => {this.updateInfo()})
  }
  public studentSelect(student) {
    this.currentStudent = student;
  }
}
