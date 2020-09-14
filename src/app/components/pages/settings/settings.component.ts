import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { Location } from '@angular/common';
import { SettingsService } from '../../../services/settings/settings.service';
import { Settings } from '../../../models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(
    private settingsService: SettingsService,
    private location: Location,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
    this.snackbarService.showFlashMessage(
      'Setting updated correctly',
      'alert-success'
    );
    this.location.back();
  }
}
