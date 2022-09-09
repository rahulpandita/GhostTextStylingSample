// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "textstylingsample" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('textstylingsample.helloWorld', () => {
		// get current editor and stylize text in line 1 with ghost text
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const line = editor.document.lineAt(0);
			// get current cursor position
			const position = editor.selection.active;
			// new position is the end of next line
			const newPosition = position.with(position.line + 1, 0);
			// add new line in current line and insert ghost text
			editor.edit(editBuilder => {
				const text = "Hello World!!";
				editBuilder.insert(position, text);
			});
			//decoration type as ghost text
			const decorationType = vscode.window.createTextEditorDecorationType({
				//color is grey
				color: 'rgba(128,128,128,0.5)',
				textDecoration: 'italic'
			});
			editor.setDecorations(decorationType, [new vscode.Range(position, newPosition)]);
		}
			

		
		vscode.window.showInformationMessage('Hello World from TextStylingSample!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
