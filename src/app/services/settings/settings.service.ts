import { Injectable } from '@angular/core';
import { Settings } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings: Settings = {
    allowRegistration: true,
    ShowPagesToRead: true,
    showReadPages: true,
  };
  constructor() {}

  getSettings(): Settings {
    return this.settings;
  }
}
