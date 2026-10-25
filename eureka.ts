/* i-o V2.21  20251030 */

let white_t = 250
let black_t = 30

enum onoff {
    ON,
    OFF,
}

let io_neo = neopixel.create(DigitalPin.P9, 3, NeoPixelMode.RGB);
io_neo.setBrightness(15)

for (let n = 0; n < 3; n++) {
    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
}
io_neo.show()


//% color="#ff4500" weight=94 
namespace io {

    export enum BT {
        //% block="lighter"
        lighter,
        //% block="darker"
        darker
    }





    export enum colorcycle {
        //% block="cycle1"
        cycle1,
        //% block="cycle10",
        cycle10,
        //% block="cycle42",
        cycle42,
        //% block="cylce64",
        cycle64,
        //% block="cycle256",
        cycle256
    }

    export enum colorgain {
        //% block="1×gain"
        gain1,
        //% block="4×gain",
        gain4,
        //% block="16×gain",
        gain16,
        //% block="60×gain",
        gain60
    }


    let color_cycle = 10;
    let color_green_blue_threshold_percent = 90
    let color_red_green_threshold_percent = 150
    let color_white_balance_limit = 65

    export enum color_sensor {
        //% block="Red"
        Red,
        //% block="Green",
        Green,
        //% block="Blue",
        Blue,
        //% block="Light",
        Light
    }

    export enum color_scene {
        //% block="Red"
        Red,
        //% block="Green",
        Green,
        //% block="Blue",
        Blue,
        //% block="Black",
        Black,
        //% block="White"
        White
    }



    /**
    * 次の命令に移るまで、一定時間待つ
    */
    //% color="#1E90FF" weight=93 block="Wait time (sec)|%second|" group="1 i:o Neopixel"
    //% second.min=0 second.max=10 second.defl=1
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }


    /**
    * 青LEDのON/OFFON/OFF
    */
    //% color="#4741f1" weight=89 blockId=neopixel_blue block="Traffic light blue|%mode|" group="1 i:o Neopixel"
    export function neopixel_blue_block(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                io_neo.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
                io_neo.show()
                basic.pause(10);
                break;

            case onoff.OFF:
                io_neo.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
                io_neo.show()
                basic.pause(10);
                break;
        }
    }

    /**
    * 黄色LEDのON/OFFON/OFF
    */
    //% color="#ffa800" weight=86 blockId=neopixel_yellow block="Traffic light yellow|%mode|" group="1 i:o Neopixel"
    export function neopixel_yellow_block(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                io_neo.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
                io_neo.show()
                basic.pause(10);
                break;

            case onoff.OFF:
                io_neo.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
                io_neo.show()
                basic.pause(10);
                break;
        }
    }

    /**
    * 赤LEDのON/OFFON/OFF
    */
    //% color="#ff4940" weight=84 blockId=neopixel_red block="Traffic light red|%mode|" group="1 i:o Neopixel"
    export function neopixel_red_block(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                io_neo.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
                io_neo.show()
                basic.pause(10);
                break;

            case onoff.OFF:
                io_neo.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
                io_neo.show()
                basic.pause(10);
                break;
        }
    }

    /**
    * ﾌﾙｶﾗｰLEDを全部白で発光　0～255で調整
    */
    //% color="#808080" weight=82 blockId=neopixel_white block="white light |%mode|,Brightness|%BR|" group="1 i:o Neopixel"
    //% BR.min=0 BR.max=255 BR.defl=15
    export function neopixel_white_block(mode: onoff, BR: number) {

        switch (mode) {
            case onoff.ON:
                io_neo.setBrightness(BR)
                for (let n = 0; n < 3; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.White))
                }
                io_neo.show()
                break;

            case onoff.OFF:
                for (let n = 0; n < 3; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
                }
                io_neo.show()
                break;
        }
    }

    /**
    * ﾌﾙｶﾗｰLEDを全部消す
    */
    //% color="#000000" weight=80 blockId=neopixel_erace block="Color LED(s) off" group="1 i:o Neopixel"
    export function neopixel_erace_block() {
        for (let n = 0; n < 3; n++) {
            io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
        }
        io_neo.show()
    }

    /**
    * ﾌﾙｶﾗｰLEDの明るさ調整　0～255の間で調整
    */
    //% color="#708090" weight=78 blockId=neopixel_Brightness block="Color LED(s) Brightness|%neo_Brightness| " group="1 i:o Neopixel"
    //% neo_Brightness.min=0 neo_Brightness.max=255 neo_Brightness.defl=15
    export function neopixel_Brightness_block(neo_Brightness: number) {
        io_neo.setBrightness(neo_Brightness)
    }

    /**
    * 3つのLEDの中から光らせたいLED番号と、その色を指定
    */
    //% color.shadow="colorNumberPicker"
    //% color="#708090" weight=76 blockId=neopixel_set block="No.|%neo_number|LED ON  color $color" group="1 i:o Neopixel"
    //% neo_number.min=0 neo_number.max=2 neo_number.defl=0
    export function neopixel_set_block(neo_number: number, color: number) {
        io_neo.setPixelColor(neo_number, color)
        io_neo.show()
    }

    /**
    * 何個のLEDを光らせるかと、その色を指定
    */
    //% color.shadow="colorNumberPicker"
    //% color="#708090" weight=74 blockId=neopixel_select block="|%neo_number|LED(s) ON   color $color" group="1 i:o Neopixel"
    //% neo_number.min=0 neo_number.max=3 neo_number.defl=3
    export function neopixel_select_block(neo_number: number, color: number) {
        for (let n = 0; n < 3; n++) {
            io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
        }
        io_neo.show()
        for (let n = 0; n < neo_number; n++) {
            io_neo.setPixelColor(n, color)
        }
        io_neo.show()

    }

    /**
    * 3個のﾌﾙｶﾗｰLEDを多色で光らせる。
    */
    //% color="#708090" weight=72 blockId=neopixel_reinbow block="RGB on" group="1 i:o Neopixel"
    export function neopixel_rainbow() {
        io_neo.showRainbow(1, 180)
    }

    /**
    * 人感ｾﾝｻｰ用　検知した時は真（1）、しないときは偽（0）を返す
    */
    //% color="#a0522d" weight=36 block="Human in motion" group="2 i:o Human detecting sensor"
    export function IO_humanDetection(): boolean {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            return true;
        } else {
            return false;
        }
    }

    /**
    * 人感ｾﾝｻｰ用　検知した時は真（1）、しないときは偽（0）を返す
    */
    //% color="#a0522d" weight=34 blockId=IO_human block="human detecting sensor binary" group="2 i:o Human detecting sensor"
    export function IO_human(): number {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        return pins.digitalReadPin(DigitalPin.P14);
    }

    /**
    * 人感ｾﾝｻｰ用　検知した時は真（1）、しないときは偽（0）を返す
    */
    //% color="#a0522d"  weight=79 blockId=IO_human_DISP block="Show human detecting sensor binary" group="2 i:o Human detecting sensor"
    export function IO_human_DISP() {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        basic.showNumber(pins.digitalReadPin(DigitalPin.P14));
    }

    /**
    * micro:bit上の光ｾﾝｻｰ用ﾌﾞﾛｯｸ　条件に合うときは真（1）、そうでないときは偽（0）を返す
    */
    //% color="#009A00"  weight=81 blockId=microbit2_decideLight block="light level is $limit or $Brightness" group="3 micro:bit light sensor"
    //% limit.min=0 limit.max=100
    export function microbit2_decideLight(limit: number, Brightness: BT): boolean {
        switch (Brightness) {
            case BT.darker:
                if (input.lightLevel() / 254 * 100 <= limit) {
                    return true;
                } else {
                    return false;
                }
            case BT.lighter:
                if (input.lightLevel() / 254 * 100 < limit) {
                    return false;
                } else {
                    return true;
                }
        }
    }


    /**
    * micro:bit上の光ｾﾝｻｰ用ﾌﾞﾛｯｸ　0～100の間で表している
    */
    //% color="#009A00"  weight=80 blockId=microbit2_denkitemp block="Light sensor value" group="3 micro:bit light sensor"
    export function microbit2_denkitemp(): number {
        return Math.round(input.lightLevel() / 254 * 100);
    }

    /**
    * micro:bit上の光ｾﾝｻｰ用ﾌﾞﾛｯｸ　0～100の間で表している
    */
    //% color="#228b22"  weight=82 blockId=microbit2_denkiLED block="Show light sensor values" group="3 micro:bit light sensor"
    export function microbit2_denkiLED() {
        basic.showNumber(Math.round(input.lightLevel() / 254 * 100));
    }


    /**
    * イーオ上のリレー（スイッチ）のON/OFFブロック
    */
    //% color="#4682b4" weight=58 blockId=IO_relay block="Relay (digital) write|%mode|" group="4 Relay control"
    export function IO_relay(mode: onoff) {
        switch (mode) {
            case onoff.ON: {
                return pins.digitalWritePin(DigitalPin.P8, 1);
            }
            case onoff.OFF: {
                return pins.digitalWritePin(DigitalPin.P8, 0);
            }
        }
    }

    /**
    * イーオ上のリレー（スイッチ）のON/OFFブロック　PWM制御（高速なON/OFF）により、アナログ制御ができる
    */
    //% color="#4682b4" weight=56 blockId=IO_relay_2 block="Relay (analog) write|%syuturyoku|" group="4 Relay control"
    //% syuturyoku.min=0 syuturyoku.max=1023 syuturyoku.defl=1023
    export function IO_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P8, syuturyoku);
    }


    // dstemp モジュールの読み込み（MakeCode拡張で既に追加済みとする）


    let sensorPin: DigitalPin;



    /**
     * DS18B20温度センサーを読み取る
     * P1固定
     */
    //% color="#ff7b00" weight=30 group="5 DS18B20 Temp sensor"
    //% blockId="ds18b20_temperature_p1"
    //% block="DS18B20 Temperature (°C)"
    export function temperatureWithPin(): number {
        sensorPin = DigitalPin.P1

        if (control.hardwareVersion() == "1") {
            // V1 用: dstemp ライブラリを使用
            return Math.round(dstemp.celsius(sensorPin) * 10) / 10;
        } else {
            // V2 用: 自前の実装
            let temp1 = measureTemperature();
            basic.pause(100);
            let temp2 = measureTemperature();
            basic.pause(100);
            let temp3 = measureTemperature();

            let temps = [temp1, temp2, temp3];
            temps.sort((a, b) => a - b);
            let temp = temps[1];

            return Math.round(temp * 10) / 10;
        }
    }

    function measureTemperature(): number {
        if (!reset()) return -999;

        writeByte(0xCC); // Skip ROM
        writeByte(0x44); // Convert T
        basic.pause(100); // 最大変換時間750ms

        if (!reset()) return -999;

        writeByte(0xCC); // Skip ROM
        writeByte(0xBE); // Read Scratchpad

        let temp_L = readByte();
        let temp_H = readByte();
        let raw = (temp_H << 8) | temp_L;

        if (raw > 0x7FFF) {
            raw = raw - 0x10000;
        }
        return raw / 16.0;
    }


    function reset(): boolean {
        pins.digitalWritePin(sensorPin, 0);
        control.waitMicros(480);
        pins.digitalWritePin(sensorPin, 1);
        control.waitMicros(70);
        let presence = pins.digitalReadPin(sensorPin) == 0;
        control.waitMicros(410);
        return presence;
    }

    function writeBit(bit: number) {
        pins.digitalWritePin(sensorPin, 0);
        if (bit) {
            control.waitMicros(10);
            pins.digitalWritePin(sensorPin, 1);
            control.waitMicros(55);
        } else {
            control.waitMicros(65);
            pins.digitalWritePin(sensorPin, 1);
            control.waitMicros(5);
        }
    }

    function writeByte(byte: number) {
        for (let i = 0; i < 8; i++) {
            writeBit((byte >> i) & 1);
        }
    }

    function readBit(): number {
        pins.digitalWritePin(sensorPin, 0);
        //control.waitMicros(2);
        pins.digitalWritePin(sensorPin, 1);
        //control.waitMicros(8);
        let bit = pins.digitalReadPin(sensorPin);
        control.waitMicros(60);
        return bit;
    }

    function readByte(): number {
        let byte = 0;
        for (let i = 0; i < 8; i++) {
            byte |= (readBit() << i);
        }
        return byte;
    }







    /*
        smbus.writeByte(0x81, 0x00)  //0x81=10000001  RGB timing 700ms
        smbus.writeByte(0x81, 0x10)  //16×gain
    
        smbus.writeByte(0x80, 0x03)  //0x03を書くと動作開始
        smbus.writeByte(0x81, 0x2b)  //this.addr 0x29 0x81=10000001 0x2b=00101011
    */
    smbus.writeByte(0x81, 0xF6)  //cycle10


    smbus.writeByte(0x80, 0x03)  //0x03を書くと動作開始









    /**
 * 各色のセンサーで取得した値を返す
 */
    //% color="#ffa500"  weight=35 block="values |%color|" group="5 color sensor"
    export function colorsensor_value(color: color_sensor): number {
        switch (color) {
            case color_sensor.Light:
                return color_L()
            case color_sensor.Red:
                return color_R()
            case color_sensor.Green:
                return color_G()
            case color_sensor.Blue:
                return color_B()
        }
    }


    // サープと同じ係数で補正し、最大成分を256に正規化する。
    function color_R() {
        return normalized_color_once()[0]
    }
    function color_G() {
        return normalized_color_once()[1]
    }
    function color_B() {
        return normalized_color_once()[2]
    }
    function color_L() {
        let result: Buffer = smbus.readBuffer(0xb4, pins.sizeOf(NumberFormat.UInt16LE) * 4)
        return smbus.unpack("HHHH", result)[0] / color_cycle * 10
    }









    export function rgb(): number[] {
        let result: number[] = raw()
        result.shift() // clear を除く
        return result  // [R, G, B] の生値
    }


    export function raw(): number[] {

        let result: Buffer = smbus.readBuffer(0xb4, pins.sizeOf(NumberFormat.UInt16LE) * 4)
        return smbus.unpack("HHHH", result)
    }

    function normalized_color_once(): number[] {
        let v = raw()
        let clear = v[0]
        if (clear <= 0) return [0, 0, 0, 0]
        let r = v[1] * 255 / clear * 0.8
        let g = v[2] * 255 / clear
        let b = v[3] * 255 / clear * 1.2
        let m = Math.max(r, Math.max(g, b))
        if (m <= 0) return [0, 0, 0, 0]
        return [Math.round(r / m * 256), Math.round(g / m * 256),
            Math.round(b / m * 256), Math.round(clear / color_cycle * 10)]
    }

    function normalized_color_average(samples: number): number[] {
        let sum = [0, 0, 0, 0]
        for (let i = 0; i < samples; i++) {
            let v = normalized_color_once()
            for (let j = 0; j < 4; j++) sum[j] += v[j]
            basic.pause(20)
        }
        for (let j = 0; j < 4; j++) sum[j] = Math.round(sum[j] / samples)
        return sum
    }

    function color_rgb_balance_percent(R: number, G: number, B: number): number {
        let maxRGB = Math.max(R, Math.max(G, B))
        if (maxRGB <= 0) return 0
        return Math.round(Math.min(R, Math.min(G, B)) * 100 / maxRGB)
    }



    /**
 * センサーの測定回数　標準は10回に設定されている
 */
    //% color="#ffa500" weight=88 blockId=selectcycle
    //% block="choice |%cycle|" group="5 color sensor"
    export function selectcycle(cycle: colorcycle): void {

        switch (cycle) {
            case colorcycle.cycle1:
                color_cycle = 1
                smbus.writeByte(0x81, 0xFF)
                break;
            case colorcycle.cycle10:
                color_cycle = 10
                smbus.writeByte(0x81, 0xF6)
                break;
            case colorcycle.cycle42:
                color_cycle = 42
                smbus.writeByte(0x81, 0xD5)
                break;
            case colorcycle.cycle64:
                color_cycle = 64
                smbus.writeByte(0x81, 0xC0)
                break;
            case colorcycle.cycle256:
                color_cycle = 256
                smbus.writeByte(0x81, 0x00)
                break;
        }
    }


    /**
    * カラーセンサーの白紙と黒紙のしきい値を変更するブロックです。
    * 標準では、白紙は明るさ250以上かつRGB均等度65％以上、黒紙は30以下です。
    * 外光や紙の種類によって、うまく判断できない際に数値を変更してください。
    */
    //% color="#ffa500" weight=86
    //% block="しきい値設定 白:%white_threshold 以上　黒:%black_threshold 以下" group="5 color sensor"
    //% white_threshold.min=100 white_threshold.max=600 white_threshold.defl=250
    //% black_threshold.min=0 black_threshold.max=200 black_threshold.defl=30
    export function WB_threshold(white_threshold: number, black_threshold: number): void {
        white_t = white_threshold
        black_t = black_threshold
    }

    /**
    * 白紙を置いて白判定を自動調整する
    */
    //% color="#ffa500" weight=84
    //% block="white paper calibration" group="5 color sensor"
    export function whitePaperCalibration(): void {
        let v = normalized_color_average(8)
        let l = v[3]
        if (l > 0) {
            white_t = Math.idiv(l * 9, 10)
            color_white_balance_limit = Math.max(65, Math.min(75,
                color_rgb_balance_percent(v[0], v[1], v[2]) - 15))
        }
    }

    /**
    * 青紙が緑になる場合は値を下げ、緑紙が青になる場合は上げます。
    * 再起動で90％に戻るため、設定ブロックは「最初だけ」に置いてください。
    */
    //% color="#ffa500" weight=85 blockId=color_green_blue_threshold
    //% block="set green/blue threshold B/G to %percent percent" group="5 color sensor"
    //% percent.min=50 percent.max=150 percent.defl=90
    export function color_green_blue_threshold(percent: number): void {
        if (percent != percent) return
        color_green_blue_threshold_percent = Math.round(Math.max(50, Math.min(150, percent)))
    }

    function determineGreenBlueID(G: number, B: number): number {
        return B * 100 >= G * color_green_blue_threshold_percent ? 3 : 2
    }

    /**
    * 赤・緑の判定境界をR/Gの百分率で設定します。初期値は150％です。
    * 赤紙が緑になる場合は値を下げ、緑紙が赤になる場合は上げます。
    * 青との区別には従来どおりRがBの150％以上という条件も使います。
    * 再起動で150％に戻るため、設定ブロックは「最初だけ」に置いてください。
    */
    //% color="#ffa500" weight=85 blockId=color_red_green_threshold
    //% block="set red/green threshold R/G to $percent percent" group="5 color sensor"
    //% percent.min=50 percent.max=300 percent.defl=150
    export function color_red_green_threshold(percent: number): void {
        if (percent != percent) return
        color_red_green_threshold_percent = Math.round(Math.max(50, Math.min(300, percent)))
    }


    /**
   * 色を数値で返す　黒:0　　赤：1　緑：2　青：3　白:4
   */
    //% color="#ffa500"  weight=28 blockId=color_ID block="color ID" group="5 color sensor"
    export function color_ID(): number {
        let v = normalized_color_average(3)
        return determineColorID(v[0], v[1], v[2], v[3])
    }

    function determineColorID(R: number, G: number, B: number, L: number): number {
        if (L <= black_t) return 0
        if (L >= white_t && color_rgb_balance_percent(R, G, B) >= color_white_balance_limit) return 4
        if (R * 100 >= G * color_red_green_threshold_percent && R >= 1.5 * B) return 1
        return determineGreenBlueID(G, B)
    }


    /**
    * 色を1文字で返す
    * 赤:R 緑:G 青:B 白:W 黒:K
    */
    //% color="#ffa500" block="get color name" weight=30 group="5 color sensor"
    export function getColorName(): string {
        switch (color_ID()) {
            case 1:
                return "R"
            case 2:
                return "G"
            case 3:
                return "B"
            case 4:
                return "W"
            default:
                return "K"
        }
    }




    /**
    *　指定した色の場合は真（1）、異なる場合は偽（0）を返す
    */
    //% color="#ffa500"  weight=14 block="|%scene|color " group="5 color sensor"
    export function color1(scene: color_scene): boolean {

        switch (scene) {
            case color_scene.Red:
                if (color_ID() == 1) {
                    return true;
                } else {
                    return false;
                }
                break;
            case color_scene.Green:
                if (color_ID() == 2) {
                    return true;
                } else {
                    return false;
                }
                break;
            case color_scene.Blue:
                if (color_ID() == 3) {
                    return true;
                } else {
                    return false;
                }
                break;
            case color_scene.Black:
                if (color_ID() == 0) {
                    return true;
                } else {
                    return false;
                }
                break;
            case color_scene.White:
                if (color_ID() == 4) {
                    return true;
                } else {
                    return false;
                }
                break;
        }
    }




    namespace smbus {
        export function writeByte(register: number, value: number): void {
            let temp = pins.createBuffer(2);
            temp[0] = register;
            temp[1] = value;
            pins.i2cWriteBuffer(0x29, temp, false);
        }


        export function readBuffer(register: number, len: number): Buffer {
            let temp = pins.createBuffer(1);
            temp[0] = register;
            pins.i2cWriteBuffer(0x29, temp, false);
            return pins.i2cReadBuffer(0x29, len, false);
        }


        export function unpack(fmt: string, buf: Buffer): number[] {
            let le: boolean = true;
            let offset: number = 0;
            let result: number[] = [];
            let num_format: NumberFormat = 0;
            for (let c = 0; c < fmt.length; c++) {
                switch (fmt.charAt(c)) {
                    case '<':
                        le = true;
                        continue;
                    case '>':
                        le = false;
                        continue;
                    case 'c':
                    case 'B':
                        num_format = le ? NumberFormat.UInt8LE : NumberFormat.UInt8BE; break;
                    case 'b':
                        num_format = le ? NumberFormat.Int8LE : NumberFormat.Int8BE; break;
                    case 'H':
                        num_format = le ? NumberFormat.UInt16LE : NumberFormat.UInt16BE; break;
                    case 'h':
                        num_format = le ? NumberFormat.Int16LE : NumberFormat.Int16BE; break;
                }
                result.push(buf.getNumber(num_format, offset));
                offset += pins.sizeOf(num_format);
            }
            return result;
        }
    }



    // choose comparison type
    export enum ultrasonicCompare {
        //% block="longer than"
        Longer = 0,
        //% block="shorter than"
        Shorter = 1
    }

    // internal: measure once and return distance in cm
    function __ultra_measure_cm_once(trig: DigitalPin, echo: DigitalPin): number {
        let us = 0
        basic.pause(5)
        pins.setPull(echo, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0)
        us = pins.pulseIn(echo, PulseValue.High, 500 * 58)
        if (us <= 0) return 0
        // keep the same conversion as original code: (us / 58) * 1.5
        return Math.round(Math.idiv(us, 58) * 1.5)
    }

    // internal: auto select pins
    function __ultra_autopins(): { trig: DigitalPin, echo: DigitalPin } {
        // try P0/P1
        let d01 = __ultra_measure_cm_once(DigitalPin.P0, DigitalPin.P1)
        if (d01 > 0) return { trig: DigitalPin.P0, echo: DigitalPin.P1 }
        // try P1/P2
        let d12 = __ultra_measure_cm_once(DigitalPin.P1, DigitalPin.P2)
        if (d12 > 0) return { trig: DigitalPin.P1, echo: DigitalPin.P2 }
        // fallback
        return { trig: DigitalPin.P0, echo: DigitalPin.P1 }
    }

    /**
     * Get distance (cm) from ultrasonic sensor (auto port).
     */
    //% color="#2a2aba" weight=30 blockId=ultra_distance_auto
    //% block="ultrasonic distance (cm) auto"
    //% group="Ultrasonic"
    export function ultrasonic_distance_auto(): number {
        const { trig, echo } = __ultra_autopins()
        return __ultra_measure_cm_once(trig, echo)
    }

    /**
     * Check distance is longer/shorter than limit (cm)
     */
    //% color="#2a2aba" weight=28 blockId=ultra_compare_auto
    //% block="ultrasonic distance is $limit cm or $mode (auto)"
    //% limit.min=0 limit.max=400
    //% group="Ultrasonic"
    export function ultrasonic_compare_auto(mode: ultrasonicCompare, limit: number): boolean {
        const { trig, echo } = __ultra_autopins()
        const d = __ultra_measure_cm_once(trig, echo)
        if (d == 0) {
            // no echo → treat as "long" (you can change this if needed)
            return (mode == ultrasonicCompare.Longer)
        }
        if (mode == ultrasonicCompare.Longer) {
            return d > limit
        } else {
            return d < limit
        }
    }
}
