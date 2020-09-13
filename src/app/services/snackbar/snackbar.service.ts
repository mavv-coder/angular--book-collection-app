import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  flashWorking: boolean = false;

  constructor(private flashMessage: FlashMessagesService) {}

  setFlashWorking() {
    this.flashWorking = true;
    setTimeout(() => {
      this.flashWorking = false;
    }, 2000);
  }

  showFlashMessage(msg: string, cssClass: string): void {
    this.setFlashWorking();
    this.flashMessage.show(msg, {
      cssClass: cssClass,
      timeout: 2000,
    });
  }

  getflashWorking(): boolean {
    return this.flashWorking;
  }
}
