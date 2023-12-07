# quarto-revealjs-budoux Extension For Quarto

quarto-revealjs-budouxは、QuartoのReveal.jsスライドで日本語の長いテキストを適切に折り返すための拡張機能です。この拡張機能は、BudouXのJavaScriptライブラリを利用しています。

## Installing

以下のコマンドを実行して、quarto-revealjs-budoux拡張機能をインストールします。

```bash
quarto add statditto/quarto-revealjs-budoux
```

このコマンドを実行すると、拡張機能は_extensionsサブディレクトリにインストールされます。バージョン管理を使用している場合は、このディレクトリをチェックインする必要があります。

## Using

quarto-revealjs-budoux拡張機能を使用すると、QuartoのReveal.jsスライドで日本語の長いテキストを適切に折り返すことができます。特定のスライドでBudouXを適用しない場合は、そのスライドに.no-budouxクラスを追加します。

## Example

最小限の例のソースコードはこちらです: [example.qmd](example.qmd).