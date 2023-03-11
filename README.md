# Popover 

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.



## Installation

Install proxolo-popover with npm

```bash
  npm i proxolo-popover

```
### app.module.ts
```
import { PopoverModule } from 'proxolo-popover';

 imports: [
    PopoverModule
  ]
```
### app.component.html
```
<popover
[buttonStyle]="'icon'"
[title]="'Title'"
[type]="'text'"
[body]="'Body'"
></popover>
```

## angular.json

```
styles :
"node_modules/primeng/resources/themes/saga-blue/theme.css",
"node_modules/bootstrap/dist/css/bootstrap.css"
```


## API Reference

#### button style

```
  icon,label
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `icon` | `string` |       font awesome icon |
| `label` | `string` |       text |

#### type

```http
  text, html
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `text`      | `string` | text for the popover |
| `html`      | `html` | html format |


## screenshot
![Screenshot (11)](https://user-images.githubusercontent.com/73517233/224474856-60407fc3-1662-4abd-b5da-50dd507c12cf.png)
