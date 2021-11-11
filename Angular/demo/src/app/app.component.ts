// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Component} from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  }
