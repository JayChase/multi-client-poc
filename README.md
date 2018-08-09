# BfasrMultiClientPoc

## Getting started

Requires angular-cli >=6.1.1.

git clone
npm install

To run or build the project with the base config:

```bash
ng s --c=development
ng build
```

To run or build the project with a different client config

```bash
ng s client1 --c=development
ng build client1
```

## 3 parts:

### theming

Set styles.scss and theme.scss paths in client project to client/clientName/.

### assets

project change assets folder to point to client assets folder,
environment.\*.ts change assetsPath to client path and always use prefix an aset path with this

### translations

Mark text to be translated with i18n attribute and an id:

```html
    <p class="mat-body-1" i18n="@@clientDescription">Client specific description from translate file.</p>
```

create translate source file

```bash
    ng xi18n
```

will create ./src/messages.xlf.

Add client speicifc translations to client/clientName/messages.xlf

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
  <file source-language="en" datatype="plaintext" original="ng2.template">
    <body>
      <trans-unit id="clientDescription" datatype="html">
        <source>Client specific description from translate file.</source>
        <target>Client 1 translated description.</target>
        <context-group purpose="location">
          <context context-type="sourcefile">app/app.component.html</context>
          <context context-type="linenumber">5</context>
        </context-group>
      </trans-unit>
    </body>
  </file>
</xliff>
```

### Client specific code.

Angular-cli now supports libraries uner a single project https://github.com/angular/angular-cli/wiki/stories-create-library. Client specific code could be moved out into a library which is only included in the specific client build.
