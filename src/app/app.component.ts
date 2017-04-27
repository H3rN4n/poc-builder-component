import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  mock = {
    section: [
      {
        block: [
          {
            "orientation": "flex-row",
            content: [
              {
                width: 1,
                height: 2
              },
              {
                width: 1,
                height: 2
              },
              {
                width: 2,
                height: 2
              },
              {
                width: 2,
                height: 1
              },
              {
                width: 1,
                height: 1
              },
              {
                width: 1,
                height: 1
              },
            ]
          },
          //
          // {
          //   "orientation": "flex-column",
          //   content: [
          //     {
          //       width: 1,
          //       height: 2
          //     },
          //     {
          //       width: 1,
          //       height: 2
          //     },
          //     {
          //       width: 2,
          //       height: 2
          //     },
          //     {
          //       width: 2,
          //       height: 3
          //     },
          //   ]
          // }
        ]
      }
    ]
  }

  options = {
    widths: [
      '0', '25%', '50%', '100%'
    ],
    heights: [
      '0', '45%', '55%'
    ]
  };

  private setContentWidth(input) {
    return this.options.widths[input];
  }

  private setContentHeights(input) {
    return this.options.heights[input];
  }

  public buildStyles(content) {
    return { 'width': this.setContentWidth(content.width), 'height': this.setContentHeights(content.height) }
    //return { 'width': this.setContentWidth(content.width) }
  }
}

