import { Injectable } from '@angular/core';
import { Settings } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings: Settings;

  constructor() {
    if (localStorage.getItem('settings') !== null) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    } else {
      this.settings = {
        allowRegistration: true,
        showPagesToRead: true,
        showReadPages: true,
      };
    }
  }

  getSettings(): Settings {
    return this.settings;
  }
}
