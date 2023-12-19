"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9909],{9909:(oe,L,x)=>{x.r(L),x.d(L,{Adapter:()=>_,CodeActionAdaptor:()=>U,DefinitionAdapter:()=>H,DiagnosticsAdapter:()=>N,DocumentHighlightAdapter:()=>E,FormatAdapter:()=>j,FormatHelper:()=>y,FormatOnTypeAdapter:()=>B,InlayHintsAdapter:()=>z,Kind:()=>c,LibFiles:()=>M,OutlineAdapter:()=>V,QuickInfoAdapter:()=>K,ReferenceAdapter:()=>W,RenameAdapter:()=>$,SignatureHelpAdapter:()=>D,SuggestAdapter:()=>k,WorkerManager:()=>I,flattenDiagnosticMessageText:()=>C,getJavaScriptWorker:()=>ie,getTypeScriptWorker:()=>ne,setupJavaScript:()=>se,setupTypeScript:()=>re});var Q=x(86294),X=x(27945);/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.40.0(83b3cf23ca80c94cccca7c5b3e48351b220f8e35)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var P=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=Object.getOwnPropertyNames,q=Object.prototype.hasOwnProperty,ee=(e,t,a)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t,a,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Z(t))!q.call(e,o)&&o!==a&&P(e,o,{get:()=>t[o],enumerable:!(i=Y(t,o))||i.enumerable});return e},te=(e,t,a)=>(O(e,t,"default"),a&&O(a,t,"default")),f=(e,t,a)=>(ee(e,typeof t!="symbol"?t+"":t,a),a),n={};te(n,Q);var I=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=n.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(n.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},s={};s["lib.d.ts"]=!0,s["lib.decorators.d.ts"]=!0,s["lib.decorators.legacy.d.ts"]=!0,s["lib.dom.d.ts"]=!0,s["lib.dom.iterable.d.ts"]=!0,s["lib.es2015.collection.d.ts"]=!0,s["lib.es2015.core.d.ts"]=!0,s["lib.es2015.d.ts"]=!0,s["lib.es2015.generator.d.ts"]=!0,s["lib.es2015.iterable.d.ts"]=!0,s["lib.es2015.promise.d.ts"]=!0,s["lib.es2015.proxy.d.ts"]=!0,s["lib.es2015.reflect.d.ts"]=!0,s["lib.es2015.symbol.d.ts"]=!0,s["lib.es2015.symbol.wellknown.d.ts"]=!0,s["lib.es2016.array.include.d.ts"]=!0,s["lib.es2016.d.ts"]=!0,s["lib.es2016.full.d.ts"]=!0,s["lib.es2017.d.ts"]=!0,s["lib.es2017.full.d.ts"]=!0,s["lib.es2017.intl.d.ts"]=!0,s["lib.es2017.object.d.ts"]=!0,s["lib.es2017.sharedmemory.d.ts"]=!0,s["lib.es2017.string.d.ts"]=!0,s["lib.es2017.typedarrays.d.ts"]=!0,s["lib.es2018.asyncgenerator.d.ts"]=!0,s["lib.es2018.asynciterable.d.ts"]=!0,s["lib.es2018.d.ts"]=!0,s["lib.es2018.full.d.ts"]=!0,s["lib.es2018.intl.d.ts"]=!0,s["lib.es2018.promise.d.ts"]=!0,s["lib.es2018.regexp.d.ts"]=!0,s["lib.es2019.array.d.ts"]=!0,s["lib.es2019.d.ts"]=!0,s["lib.es2019.full.d.ts"]=!0,s["lib.es2019.intl.d.ts"]=!0,s["lib.es2019.object.d.ts"]=!0,s["lib.es2019.string.d.ts"]=!0,s["lib.es2019.symbol.d.ts"]=!0,s["lib.es2020.bigint.d.ts"]=!0,s["lib.es2020.d.ts"]=!0,s["lib.es2020.date.d.ts"]=!0,s["lib.es2020.full.d.ts"]=!0,s["lib.es2020.intl.d.ts"]=!0,s["lib.es2020.number.d.ts"]=!0,s["lib.es2020.promise.d.ts"]=!0,s["lib.es2020.sharedmemory.d.ts"]=!0,s["lib.es2020.string.d.ts"]=!0,s["lib.es2020.symbol.wellknown.d.ts"]=!0,s["lib.es2021.d.ts"]=!0,s["lib.es2021.full.d.ts"]=!0,s["lib.es2021.intl.d.ts"]=!0,s["lib.es2021.promise.d.ts"]=!0,s["lib.es2021.string.d.ts"]=!0,s["lib.es2021.weakref.d.ts"]=!0,s["lib.es2022.array.d.ts"]=!0,s["lib.es2022.d.ts"]=!0,s["lib.es2022.error.d.ts"]=!0,s["lib.es2022.full.d.ts"]=!0,s["lib.es2022.intl.d.ts"]=!0,s["lib.es2022.object.d.ts"]=!0,s["lib.es2022.regexp.d.ts"]=!0,s["lib.es2022.sharedmemory.d.ts"]=!0,s["lib.es2022.string.d.ts"]=!0,s["lib.es2023.array.d.ts"]=!0,s["lib.es2023.d.ts"]=!0,s["lib.es2023.full.d.ts"]=!0,s["lib.es5.d.ts"]=!0,s["lib.es6.d.ts"]=!0,s["lib.esnext.d.ts"]=!0,s["lib.esnext.full.d.ts"]=!0,s["lib.esnext.intl.d.ts"]=!0,s["lib.scripthost.d.ts"]=!0,s["lib.webworker.d.ts"]=!0,s["lib.webworker.importscripts.d.ts"]=!0,s["lib.webworker.iterable.d.ts"]=!0;function C(e,t,a=0){if(typeof e=="string")return e;if(e===void 0)return"";let i="";if(a){i+=t;for(let o=0;o<a;o++)i+="  "}if(i+=e.messageText,a++,e.next)for(const o of e.next)i+=C(o,t,a);return i}function w(e){return e?e.map(t=>t.text).join(""):""}var _=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let a=e.getPositionAt(t.start),i=e.getPositionAt(t.start+t.length),{lineNumber:o,column:u}=a,{lineNumber:g,column:r}=i;return{startLineNumber:o,startColumn:u,endLineNumber:g,endColumn:r}}},M=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!s[e.path.slice(1)]:!1}getOrCreateModel(e){const t=n.Uri.parse(e),a=n.editor.getModel(t);if(a)return a;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return n.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const i=X.TG.getExtraLibs()[e];return i?n.editor.createModel(i.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},N=class extends _{constructor(e,t,a,i){super(i),this._libFiles=e,this._defaults=t,this._selector=a;const o=r=>{if(r.getLanguageId()!==a)return;const l=()=>{const{onlyVisible:b}=this._defaults.getDiagnosticsOptions();b?r.isAttachedToEditor()&&this._doValidate(r):this._doValidate(r)};let d;const p=r.onDidChangeContent(()=>{clearTimeout(d),d=window.setTimeout(l,500)}),h=r.onDidChangeAttached(()=>{const{onlyVisible:b}=this._defaults.getDiagnosticsOptions();b&&(r.isAttachedToEditor()?l():n.editor.setModelMarkers(r,this._selector,[]))});this._listener[r.uri.toString()]={dispose(){p.dispose(),h.dispose(),clearTimeout(d)}},l()},u=r=>{n.editor.setModelMarkers(r,this._selector,[]);const l=r.uri.toString();this._listener[l]&&(this._listener[l].dispose(),delete this._listener[l])};this._disposables.push(n.editor.onDidCreateModel(r=>o(r))),this._disposables.push(n.editor.onWillDisposeModel(u)),this._disposables.push(n.editor.onDidChangeModelLanguage(r=>{u(r.model),o(r.model)})),this._disposables.push({dispose(){for(const r of n.editor.getModels())u(r)}});const g=()=>{for(const r of n.editor.getModels())u(r),o(r)};this._disposables.push(this._defaults.onDidChange(g)),this._disposables.push(this._defaults.onDidExtraLibsChange(g)),n.editor.getModels().forEach(r=>o(r))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const a=[],{noSyntaxValidation:i,noSemanticValidation:o,noSuggestionDiagnostics:u}=this._defaults.getDiagnosticsOptions();i||a.push(t.getSyntacticDiagnostics(e.uri.toString())),o||a.push(t.getSemanticDiagnostics(e.uri.toString())),u||a.push(t.getSuggestionDiagnostics(e.uri.toString()));const g=await Promise.all(a);if(!g||e.isDisposed())return;const r=g.reduce((d,p)=>p.concat(d),[]).filter(d=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(d.code)===-1),l=r.map(d=>d.relatedInformation||[]).reduce((d,p)=>p.concat(d),[]).map(d=>d.file?n.Uri.parse(d.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(l),!e.isDisposed()&&n.editor.setModelMarkers(e,this._selector,r.map(d=>this._convertDiagnostics(e,d)))}_convertDiagnostics(e,t){const a=t.start||0,i=t.length||1,{lineNumber:o,column:u}=e.getPositionAt(a),{lineNumber:g,column:r}=e.getPositionAt(a+i),l=[];return t.reportsUnnecessary&&l.push(n.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(n.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:o,startColumn:u,endLineNumber:g,endColumn:r,message:C(t.messageText,`
`),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const a=[];return t.forEach(i=>{let o=e;if(i.file&&(o=this._libFiles.getOrCreateModel(i.file.fileName)),!o)return;const u=i.start||0,g=i.length||1,{lineNumber:r,column:l}=o.getPositionAt(u),{lineNumber:d,column:p}=o.getPositionAt(u+g);a.push({resource:o.uri,startLineNumber:r,startColumn:l,endLineNumber:d,endColumn:p,message:C(i.messageText,`
`)})}),a}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return n.MarkerSeverity.Error;case 3:return n.MarkerSeverity.Info;case 0:return n.MarkerSeverity.Warning;case 2:return n.MarkerSeverity.Hint}return n.MarkerSeverity.Info}},k=class extends _{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,a,i){const o=e.getWordUntilPosition(t),u=new n.Range(t.lineNumber,o.startColumn,t.lineNumber,o.endColumn),g=e.uri,r=e.getOffsetAt(t),l=await this._worker(g);if(e.isDisposed())return;const d=await l.getCompletionsAtPosition(g.toString(),r);return!d||e.isDisposed()?void 0:{suggestions:d.entries.map(h=>{let b=u;if(h.replacementSpan){const v=e.getPositionAt(h.replacementSpan.start),A=e.getPositionAt(h.replacementSpan.start+h.replacementSpan.length);b=new n.Range(v.lineNumber,v.column,A.lineNumber,A.column)}const S=[];return h.kindModifiers!==void 0&&h.kindModifiers.indexOf("deprecated")!==-1&&S.push(n.languages.CompletionItemTag.Deprecated),{uri:g,position:t,offset:r,range:b,label:h.name,insertText:h.name,sortText:h.sortText,kind:k.convertKind(h.kind),tags:S}})}}async resolveCompletionItem(e,t){const a=e,i=a.uri,o=a.position,u=a.offset,r=await(await this._worker(i)).getCompletionEntryDetails(i.toString(),u,a.label);return r?{uri:i,position:o,label:r.name,kind:k.convertKind(r.kind),detail:w(r.displayParts),documentation:{value:k.createDocumentationString(r)}}:a}static convertKind(e){switch(e){case c.primitiveType:case c.keyword:return n.languages.CompletionItemKind.Keyword;case c.variable:case c.localVariable:return n.languages.CompletionItemKind.Variable;case c.memberVariable:case c.memberGetAccessor:case c.memberSetAccessor:return n.languages.CompletionItemKind.Field;case c.function:case c.memberFunction:case c.constructSignature:case c.callSignature:case c.indexSignature:return n.languages.CompletionItemKind.Function;case c.enum:return n.languages.CompletionItemKind.Enum;case c.module:return n.languages.CompletionItemKind.Module;case c.class:return n.languages.CompletionItemKind.Class;case c.interface:return n.languages.CompletionItemKind.Interface;case c.warning:return n.languages.CompletionItemKind.File}return n.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=w(e.documentation);if(e.tags)for(const a of e.tags)t+=`

${R(a)}`;return t}};function R(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[a,...i]=e.text;t+=`\`${a.text}\``,i.length>0&&(t+=` \u2014 ${i.map(o=>o.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(a=>a.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var D=class extends _{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case n.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case n.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case n.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,a,i){const o=e.uri,u=e.getOffsetAt(t),g=await this._worker(o);if(e.isDisposed())return;const r=await g.getSignatureHelpItems(o.toString(),u,{triggerReason:D._toSignatureHelpTriggerReason(i)});if(!r||e.isDisposed())return;const l={activeSignature:r.selectedItemIndex,activeParameter:r.argumentIndex,signatures:[]};return r.items.forEach(d=>{const p={label:"",parameters:[]};p.documentation={value:w(d.documentation)},p.label+=w(d.prefixDisplayParts),d.parameters.forEach((h,b,S)=>{const v=w(h.displayParts),A={label:v,documentation:{value:w(h.documentation)}};p.label+=v,p.parameters.push(A),b<S.length-1&&(p.label+=w(d.separatorDisplayParts))}),p.label+=w(d.suffixDisplayParts),l.signatures.push(p)}),{value:l,dispose(){}}}},K=class extends _{async provideHover(e,t,a){const i=e.uri,o=e.getOffsetAt(t),u=await this._worker(i);if(e.isDisposed())return;const g=await u.getQuickInfoAtPosition(i.toString(),o);if(!g||e.isDisposed())return;const r=w(g.documentation),l=g.tags?g.tags.map(p=>R(p)).join(`  

`):"",d=w(g.displayParts);return{range:this._textSpanToRange(e,g.textSpan),contents:[{value:"```typescript\n"+d+"\n```\n"},{value:r+(l?`

`+l:"")}]}}},E=class extends _{async provideDocumentHighlights(e,t,a){const i=e.uri,o=e.getOffsetAt(t),u=await this._worker(i);if(e.isDisposed())return;const g=await u.getDocumentHighlights(i.toString(),o,[i.toString()]);if(!(!g||e.isDisposed()))return g.flatMap(r=>r.highlightSpans.map(l=>({range:this._textSpanToRange(e,l.textSpan),kind:l.kind==="writtenReference"?n.languages.DocumentHighlightKind.Write:n.languages.DocumentHighlightKind.Text})))}},H=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,a){const i=e.uri,o=e.getOffsetAt(t),u=await this._worker(i);if(e.isDisposed())return;const g=await u.getDefinitionAtPosition(i.toString(),o);if(!g||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(g.map(l=>n.Uri.parse(l.fileName))),e.isDisposed()))return;const r=[];for(let l of g){const d=this._libFiles.getOrCreateModel(l.fileName);d&&r.push({uri:d.uri,range:this._textSpanToRange(d,l.textSpan)})}return r}},W=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,a,i){const o=e.uri,u=e.getOffsetAt(t),g=await this._worker(o);if(e.isDisposed())return;const r=await g.getReferencesAtPosition(o.toString(),u);if(!r||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(r.map(d=>n.Uri.parse(d.fileName))),e.isDisposed()))return;const l=[];for(let d of r){const p=this._libFiles.getOrCreateModel(d.fileName);p&&l.push({uri:p.uri,range:this._textSpanToRange(p,d.textSpan)})}return l}},V=class extends _{async provideDocumentSymbols(e,t){const a=e.uri,i=await this._worker(a);if(e.isDisposed())return;const o=await i.getNavigationTree(a.toString());if(!o||e.isDisposed())return;const u=(r,l)=>({name:r.text,detail:"",kind:m[r.kind]||n.languages.SymbolKind.Variable,range:this._textSpanToRange(e,r.spans[0]),selectionRange:this._textSpanToRange(e,r.spans[0]),tags:[],children:r.childItems?.map(p=>u(p,r.text)),containerName:l});return o.childItems?o.childItems.map(r=>u(r)):[]}},c=class{};f(c,"unknown",""),f(c,"keyword","keyword"),f(c,"script","script"),f(c,"module","module"),f(c,"class","class"),f(c,"interface","interface"),f(c,"type","type"),f(c,"enum","enum"),f(c,"variable","var"),f(c,"localVariable","local var"),f(c,"function","function"),f(c,"localFunction","local function"),f(c,"memberFunction","method"),f(c,"memberGetAccessor","getter"),f(c,"memberSetAccessor","setter"),f(c,"memberVariable","property"),f(c,"constructorImplementation","constructor"),f(c,"callSignature","call"),f(c,"indexSignature","index"),f(c,"constructSignature","construct"),f(c,"parameter","parameter"),f(c,"typeParameter","type parameter"),f(c,"primitiveType","primitive type"),f(c,"label","label"),f(c,"alias","alias"),f(c,"const","const"),f(c,"let","let"),f(c,"warning","warning");var m=Object.create(null);m[c.module]=n.languages.SymbolKind.Module,m[c.class]=n.languages.SymbolKind.Class,m[c.enum]=n.languages.SymbolKind.Enum,m[c.interface]=n.languages.SymbolKind.Interface,m[c.memberFunction]=n.languages.SymbolKind.Method,m[c.memberVariable]=n.languages.SymbolKind.Property,m[c.memberGetAccessor]=n.languages.SymbolKind.Property,m[c.memberSetAccessor]=n.languages.SymbolKind.Property,m[c.variable]=n.languages.SymbolKind.Variable,m[c.const]=n.languages.SymbolKind.Variable,m[c.localVariable]=n.languages.SymbolKind.Variable,m[c.variable]=n.languages.SymbolKind.Variable,m[c.function]=n.languages.SymbolKind.Function,m[c.localFunction]=n.languages.SymbolKind.Function;var y=class extends _{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},j=class extends y{canFormatMultipleRanges=!1;async provideDocumentRangeFormattingEdits(e,t,a,i){const o=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),g=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(o);if(e.isDisposed())return;const l=await r.getFormattingEditsForRange(o.toString(),u,g,y._convertOptions(a));if(!(!l||e.isDisposed()))return l.map(d=>this._convertTextChanges(e,d))}},B=class extends y{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,a,i,o){const u=e.uri,g=e.getOffsetAt(t),r=await this._worker(u);if(e.isDisposed())return;const l=await r.getFormattingEditsAfterKeystroke(u.toString(),g,a,y._convertOptions(i));if(!(!l||e.isDisposed()))return l.map(d=>this._convertTextChanges(e,d))}},U=class extends y{async provideCodeActions(e,t,a,i){const o=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),g=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=y._convertOptions(e.getOptions()),l=a.markers.filter(b=>b.code).map(b=>b.code).map(Number),d=await this._worker(o);if(e.isDisposed())return;const p=await d.getCodeFixesAtPosition(o.toString(),u,g,l,r);return!p||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:p.filter(b=>b.changes.filter(S=>S.isNewFile).length===0).map(b=>this._tsCodeFixActionToMonacoCodeAction(e,a,b)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,a){const i=[];for(const u of a.changes)for(const g of u.textChanges)i.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,g.span),text:g.newText}});return{title:a.description,edit:{edits:i},diagnostics:t.markers,kind:"quickfix"}}},$=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,a,i){const o=e.uri,u=o.toString(),g=e.getOffsetAt(t),r=await this._worker(o);if(e.isDisposed())return;const l=await r.getRenameInfo(u,g,{allowRenameOfImportPath:!1});if(l.canRename===!1)return{edits:[],rejectReason:l.localizedErrorMessage};if(l.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const d=await r.findRenameLocations(u,g,!1,!1,!1);if(!d||e.isDisposed())return;const p=[];for(const h of d){const b=this._libFiles.getOrCreateModel(h.fileName);if(b)p.push({resource:b.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(b,h.textSpan),text:a}});else throw new Error(`Unknown file ${h.fileName}.`)}return{edits:p}}},z=class extends _{async provideInlayHints(e,t,a){const i=e.uri,o=i.toString(),u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),g=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(i);return e.isDisposed()?null:{hints:(await r.provideInlayHints(o,u,g)).map(p=>({...p,label:p.text,position:e.getPositionAt(p.position),kind:this._convertHintKind(p.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return n.languages.InlayHintKind.Parameter;case"Type":return n.languages.InlayHintKind.Type;default:return n.languages.InlayHintKind.Type}}},F,T;function re(e){T=J(e,"typescript")}function se(e){F=J(e,"javascript")}function ie(){return new Promise((e,t)=>{if(!F)return t("JavaScript not registered!");e(F)})}function ne(){return new Promise((e,t)=>{if(!T)return t("TypeScript not registered!");e(T)})}function J(e,t){const a=[],i=[],o=new I(t,e);a.push(o);const u=(...l)=>o.getLanguageServiceWorker(...l),g=new M(u);function r(){const{modeConfiguration:l}=e;G(i),l.completionItems&&i.push(n.languages.registerCompletionItemProvider(t,new k(u))),l.signatureHelp&&i.push(n.languages.registerSignatureHelpProvider(t,new D(u))),l.hovers&&i.push(n.languages.registerHoverProvider(t,new K(u))),l.documentHighlights&&i.push(n.languages.registerDocumentHighlightProvider(t,new E(u))),l.definitions&&i.push(n.languages.registerDefinitionProvider(t,new H(g,u))),l.references&&i.push(n.languages.registerReferenceProvider(t,new W(g,u))),l.documentSymbols&&i.push(n.languages.registerDocumentSymbolProvider(t,new V(u))),l.rename&&i.push(n.languages.registerRenameProvider(t,new $(g,u))),l.documentRangeFormattingEdits&&i.push(n.languages.registerDocumentRangeFormattingEditProvider(t,new j(u))),l.onTypeFormattingEdits&&i.push(n.languages.registerOnTypeFormattingEditProvider(t,new B(u))),l.codeActions&&i.push(n.languages.registerCodeActionProvider(t,new U(u))),l.inlayHints&&i.push(n.languages.registerInlayHintsProvider(t,new z(u))),l.diagnostics&&i.push(new N(g,e,t,u))}return r(),a.push(ae(i)),u}function ae(e){return{dispose:()=>G(e)}}function G(e){for(;e.length;)e.pop().dispose()}}}]);

//# sourceMappingURL=9909.e75a74c695e5b976cba3.js.map