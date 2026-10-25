# io（イーオ）MakeCode micro:bit拡張機能

ユーレカ工房のイーオ用ブロックです。フルカラーLED、人感センサー、明るさ、リレー、DS18B20温度、色、超音波きょりセンサーを利用できます。

MakeCode extension for Eureka io boards: NeoPixel LEDs, motion, light, relay, DS18B20 temperature, color and ultrasonic distance sensors.

## 追加方法

MakeCodeの「拡張機能」の検索欄へ https://github.com/itibanbosi/pxt-io を入力し、ioを選択します。
名前だけの検索にはMakeCode側の承認が必要です。承認前はGitHub URLを入力してください。

## 使用例

```typescript
io.color_green_blue_threshold(90)
io.color_red_green_threshold(150)
io.neopixel_blue_block(onoff.ON)
basic.forever(function () {
    serial.writeValue("color", io.color_ID())
    basic.pause(1000)
})
```

## 機能と設定

- LED：P9の3個を使用。個別番号は0～2、明るさは0～255です。
- 人感センサー：動きの判定、値の取得、表示。
- 明るさ：micro:bit内蔵センサーの百分率、しきい値との比較、表示。
- リレー：デジタルON/OFFとアナログ値0～1023。
- DS18B20：P1固定の温度（℃）。端子指定の引数はありません。
- 色：黒0、赤1、緑2、青3、白4。白の初期しきい値250、黒30。白紙で自動調整できます。
- 緑・青境界：B/Gの50～150％、初期値90％。青が緑になる場合は下げます。
- 赤・緑境界：R/Gの50～300％、初期値150％。赤が緑になる場合は下げます。
- 超音波：P0/P1、P1/P2を順に試します。応答なしは距離0、比較は「長い」を真とします。

設定ブロックは「最初だけ」に置いてください。接続はイーオ基板の対応コネクターを使用します。同じ端子を使うセンサーは同時に使用できません。拡張機能読み込み時にLEDを初期化します。

## ブロックAPI一覧

以下は `io.` に続けて呼び出すAPIです。ブロックの説明と引数はソースの各関数にも記載しています。

- `driveForwards(second: number): void`
- `neopixel_blue_block(mode: onoff)`
- `neopixel_yellow_block(mode: onoff)`
- `neopixel_red_block(mode: onoff)`
- `neopixel_white_block(mode: onoff, BR: number)`
- `neopixel_erace_block()`
- `neopixel_Brightness_block(neo_Brightness: number)`
- `neopixel_set_block(neo_number: number, color: number)`
- `neopixel_select_block(neo_number: number, color: number)`
- `neopixel_rainbow()`
- `IO_humanDetection(): boolean`
- `IO_human(): number`
- `IO_human_DISP()`
- `microbit2_decideLight(limit: number, Brightness: BT): boolean`
- `microbit2_denkitemp(): number`
- `microbit2_denkiLED()`
- `IO_relay(mode: onoff)`
- `IO_relay_2(syuturyoku: number)`
- `temperatureWithPin(): number`
- `colorsensor_value(color: color_sensor): number`
- `rgb(): number[]`
- `raw(): number[]`
- `selectcycle(cycle: colorcycle): void`
- `WB_threshold(white_threshold: number, black_threshold: number): void`
- `whitePaperCalibration(): void`
- `color_green_blue_threshold(percent: number): void`
- `color_red_green_threshold(percent: number): void`
- `color_ID(): number`
- `getColorName(): string`
- `color1(scene: color_scene): boolean`
- `writeByte(register: number, value: number): void`
- `readBuffer(register: number, len: number): Buffer`
- `unpack(fmt: string, buf: Buffer): number[]`
- `ultrasonic_distance_auto(): number`
- `ultrasonic_compare_auto(mode: ultrasonicCompare, limit: number): boolean`

## ソース・開発

元プロジェクト：https://makecode.microbit.org/_21U8ddPXK6f1

共有プロジェクト内の拡張機能を取り出し、名前空間・翻訳キー・パッケージ名をioへ統一しました。既存の関数名と明示的なブロックIDは維持しています。元共有プロジェクトに含まれない追加センサーは含めていません。

DS18B20依存先は削除済みフォークから元作者bsieverの同じバージョンv0.1.21へ変更しました。

Node.jsとPXT CLIを用意し、npm install、pxt install、pxt build、pxt testを実行します。実機確認は使用する基板・センサーで行ってください。

## License

MIT License — Copyright (c) 2026 itibanbosi. 詳細は[LICENSE.txt](LICENSE.txt)。依存拡張機能はそれぞれのライセンスに従います。

## Supported targets

* for PXT/microbit
