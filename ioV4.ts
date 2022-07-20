/* Ver4 Eureka_IO &　iːo*/

enum eureka_IO {
    A,
    B,
    C,
}
enum eureka_denki {
    A,
    B,
}
enum eureka_tlp {
    A,
    B,
}
enum eureka_p1416 {
    A,
    B,
}
enum onoff {
    ON,
    OFF,
}

enum moter_d {
    L_and_R_forward,
    L_and_R_backward,
    L_forward,
    R_forward,
    L_backward,
    R_backward,
    Stop,
}
enum etc {
    AKARUSA,
    JINKAN,
}
enum L9110moter {
    seiten,
    gyakuten,
    seisi,
}
enum sonar_avg {
    avg_20_meas,
    avg_5_meas,
    One_shot_meas,
}
enum kyori {
    short,
    long,
}

let kousei_A = 1;
let kousei_B = 1;
let kousei_C = 1;

enum LED_onoff {
    off = 0,
    low = 2000,
    mid = 800,
    high = 300,
}
enum LED_color {
    Red,
    Orange,
    Yellow,
    Green,
    Light_blue,
    Blue,
    Purple,
    White,
}

enum neoLED_color {
    White,
    Red,
    Yellow,
    Green,
    Blue,
    Orange,
    Indigo,
    Violet,
    Purple,
    Black,
}

enum LED_wait {
    //% block="Select",
    zero,
    //% block="0.2",
    dot_two,
    //% block="0.3",
    dot_three,
    //% block="0.5",
    dot_five,
    //% block="0.8",
    dot_eight,
    //% block="1",
    one,
    //% block="1.3",
    one_dot_three,
    //% block="1.5",
    one_dot_five,
    //% block="1.8",
    one_dot_eight,
    //% block="2",
    two,
}

let io_neo = neopixel.create(DigitalPin.P9, 3, NeoPixelMode.RGB);


//% color="#ff4500" weight=94 block="iːo"

namespace newio_blocks {



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

    //% color="#20b2aa" weight=82 blockId=neopixel_select block="Color LED(s)|%neo_color|,|%neo_number|,on" group="1 i:o Neopixel"
    //% neo_number.min=0 neo_number.max=3
    export function neopixel_select_block(neo_color: neoLED_color, neo_number: number) {
        for (let n = 0; n < 2; n++) {
            io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
        }
        io_neo.show()
        switch (neo_color) {
            case neoLED_color.Red:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Red))
                }
                io_neo.show()
                break;
            case neoLED_color.Orange:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Orange))
                }
                io_neo.show()
                break;
            case neoLED_color.Yellow:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Yellow))
                }
                io_neo.show()
                break;
            case neoLED_color.Green:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Green))
                }
                io_neo.show()
                break;
            case neoLED_color.Blue:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Blue))
                }
                io_neo.show()
                break;
            case neoLED_color.Indigo:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Indigo))
                }
                io_neo.show()
                break;
            case neoLED_color.Violet:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Violet))
                }
                io_neo.show()
                break;
            case neoLED_color.Purple:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Purple))
                }
                io_neo.show()
                break;
            case neoLED_color.White:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.White))
                }
                io_neo.show()
                break;
            case neoLED_color.Black:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
                }
                io_neo.show()
                break;
        }
    }
    //% color="#9400d3" weight=81 blockId=neopixel_reinbow block="RGB on" group="1 i:o Neopixel"
    export function neopixel_rainbow() {
        io_neo.showRainbow(1, 180)
    }




    //% color="#cd853f" weight=80 blockId=neopixel_erace block="Color LED(s) off" group="1 i:o Neopixel"
    export function neopixel_erace_block() {
        for (let n = 0; n < 3; n++) {
            io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
        }
        io_neo.show()
    }



    //% color="#1E90FF" weight=83 block="Wait time (sec)|%second|" group="1 i:o Neopixel"
    //% second.min=0 second.max=10
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }


    //% color="#a0522d" weight=36 block="Human in motion" group="2 i:o Human detecting sensor"
    export function IO_humanDetection(): boolean {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            return true;
        } else {
            return false;
        }
    }

    //% color="#a0522d" weight=34 blockId=IO_human block="human detecting sensor binary" group="2 i:o Human detecting sensor"
    export function IO_human(): number {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        return pins.digitalReadPin(DigitalPin.P14);
    }

    //% color="#a0522d"  weight=79 blockId=IO_human_DISP block="Show human detecting sensor binary" group="2 i:o Human detecting sensor"
    export function IO_human_DISP() {

        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        basic.showNumber(pins.digitalReadPin(DigitalPin.P14));
    }

    //% color="#009A00"  weight=81 blockId=microbit2_decideLight block="Light sensor value darker than|%limit|" group="3 micro:bit light sensor"
    //% limit.min=0 limit.max=100
    export function microbit2_decideLight(limit: number): boolean {
        if (input.lightLevel() / 254 * 100 < limit) {
            return true;
        } else {
            return false;
        }
    }



    //% color="#009A00"  weight=80 blockId=microbit2_denkitemp block="Light sensor value" group="3 micro:bit light sensor"
    export function microbit2_denkitemp(): number {

        return Math.round(input.lightLevel() / 254 * 100);

    }


    //% color="#228b22"  weight=82 blockId=microbit2_denkiLED block="Show light sensor values" group="3 micro:bit light sensor"
    export function microbit2_denkiLED() {
        basic.showNumber(Math.round(input.lightLevel() / 254 * 100));
    }


    //% color="#696969" weight=58 blockId=IO_relay block="Relay (digital) write|%mode|" group="4 i:o Relay control"
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
    //% color="#696969" weight=56 blockId=IO_relay_2 block="Relay (analog) write|%syuturyoku|" group="4 i:o Relay control"
    //% syuturyoku.min=0 syuturyoku.max=1023
    export function IO_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P8, syuturyoku);
    }
}




//% color="#0000ff" weight=13 block="Accessories"
namespace eureka_blocks_soro {

    //% color="#4169e1" weight=50 blockId=eureka_O2check block="O2 sensor battery check, port|%pin|" group="O2 sensor"
    export function eureka_O2chekck(pin: eureka_IO) {
        let volt;
        switch (pin) {
            case eureka_IO.A:
                volt = pins.analogReadPin(AnalogPin.P0);
                if (volt > 200) {
                    basic.showNumber(volt);
                    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once);
                    basic.showIcon(IconNames.Diamond);
                }
                if (volt <= 200) {
                    basic.showNumber(volt);
                    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
                    basic.showIcon(IconNames.No)
                }
                break;
            case eureka_IO.B:
                volt = pins.analogReadPin(AnalogPin.P1);
                if (volt > 200) {
                    basic.showNumber(volt);
                    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once);
                    basic.showIcon(IconNames.Diamond);
                }
                if (volt <= 200) {
                    basic.showNumber(volt);
                    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
                    basic.showIcon(IconNames.No)
                }
                break;
            case eureka_IO.C:
                volt = pins.analogReadPin(AnalogPin.P2);
                if (volt > 200) {
                    basic.showNumber(volt);
                    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once);
                    basic.showIcon(IconNames.Diamond);
                }
                if (volt <= 200) {
                    basic.showNumber(volt);
                    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
                    basic.showIcon(IconNames.No)
                }
                break;

        }
    }
    //% color="#4169e1" weight=48 blockId=eureka_O2kousei block="O2 sensor calibration, port|%pin|" group="O2 sensor"
    export function eureka_O2kousei(pin: eureka_IO) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once);
        switch (pin) {
            case eureka_IO.A:
                kousei_A = pins.analogReadPin(AnalogPin.P0);
                break;
            case eureka_IO.B:
                kousei_B = pins.analogReadPin(AnalogPin.P1);
                break;
            case eureka_IO.C:
                kousei_C = pins.analogReadPin(AnalogPin.P2);
                break;
        }
    }
    //% color="#4169e1" weight=46 blockId=eureka_O2LED block="Display O2 level on m:bit, port|%pin|" group="O2 sensor"
    export function eureka_O2LED(pin: eureka_IO) {
        switch (pin) {
            case eureka_IO.A:
                let O2_0 = Math.round(pins.analogReadPin(AnalogPin.P0) / kousei_A * 20.95 * 10) / 10
                if (O2_0 >= 5 && O2_0 <= 25) {
                    basic.showString(convertToText("" + O2_0 + "% "));
                }
                else {
                    basic.showString("ER")
                }
                break;
            case eureka_IO.B:
                let O2_1 = Math.round(pins.analogReadPin(AnalogPin.P1) / kousei_B * 20.95 * 10) / 10
                if (O2_1 >= 5 && O2_1 <= 25) {
                    basic.showString(convertToText("" + O2_1 + "% "));
                }
                else {
                    basic.showString("ER")
                }
                break;
            case eureka_IO.C:
                let O2_2 = Math.round(pins.analogReadPin(AnalogPin.P2) / kousei_C * 20.95 * 10) / 10
                if (O2_2 >= 5 && O2_2 <= 25) {
                    basic.showString(convertToText("" + O2_2 + "% "));
                }
                else {
                    basic.showString("ER")
                }
                break;
        }
    }

    //% color="#4169e1" weight=44 blockId=eureka_O2serial block="Serial output O2 level to port|%pin|" group="O2 sensor"
    export function eureka_O2serial(pin: eureka_IO) {
        basic.pause(100);
        switch (pin) {
            case eureka_IO.A:
                serial.writeLine(convertToText(Math.round(pins.analogReadPin(AnalogPin.P0) / kousei_A * 20.95 * 100) / 100));
                break;
            case eureka_IO.B:
                serial.writeLine(convertToText(Math.round(pins.analogReadPin(AnalogPin.P1) / kousei_B * 20.95 * 100) / 100));
                break;
            case eureka_IO.C:
                serial.writeLine(convertToText(Math.round(pins.analogReadPin(AnalogPin.P2) / kousei_C * 20.95 * 100) / 100));
                break;
        }
    }

    //% color="#4169e1"  weight=40 blockId=eureka_O2disp block="O2 level, port|%pin|" group="O2 sensor"
    export function eureka_O2disp(pin: eureka_IO): number {
        switch (pin) {
            case eureka_IO.A:
                return pins.analogReadPin(AnalogPin.P0) / kousei_A * 20.95;
                break;
            case eureka_IO.B:
                return pins.analogReadPin(AnalogPin.P1) / kousei_B * 20.95;
                break;
            case eureka_IO.C:
                return pins.analogReadPin(AnalogPin.P2) / kousei_C * 20.95;
                break;
        }
    }

    //% color="#ff7b00" weight=32 blockId=eureka_tempDS block="Temp sensor DS, port|%pin|" group="Temp sensor"
    export function eureka_tempDS(pin: eureka_IO): number {
        let DS_temp = 0;
        switch (pin) {
            case eureka_IO.A:
                DS_temp = DS18B20.TemperatureNumber(DS18B20.pin.pin0);
                if (DS_temp > 4000) {
                    DS_temp = DS_temp - 4096;
                }
                return Math.round(DS_temp);
                break;
            case eureka_IO.B:
                DS_temp = DS18B20.TemperatureNumber(DS18B20.pin.pin1);
                if (DS_temp > 4000) {
                    DS_temp = DS_temp - 4096;
                }
                return Math.round(DS_temp);
                break;
            case eureka_IO.C:
                DS_temp = DS18B20.TemperatureNumber(DS18B20.pin.pin2);
                if (DS_temp > 4000) {
                    DS_temp = DS_temp - 4096;
                }
                return Math.round(DS_temp);
                break;
        }
    }


    //% color="#6041f1"  weight=60 blockId=eureka_L9110 block="Operate motor fan L|%mode|,port|%pin|" group="4_ユーレカ装置"
    //% advanced=true
    //% mode.min=-100 mode.max=100
    export function L9110driver(port: eureka_denki, mode: number) {
        switch (port) {
            case eureka_denki.A:
                if (mode > 0) {
                    pins.analogWritePin(AnalogPin.P0, Math.round(mode * 10.23));
                    pins.digitalWritePin(DigitalPin.P13, 0);
                }
                if (mode < 0) {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.analogWritePin(AnalogPin.P13, Math.round(-mode * 10.23));
                }
                if (mode == 0) {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                }
                break;
            case eureka_denki.B:
                if (mode > 0) {
                    pins.analogWritePin(AnalogPin.P1, Math.round(mode * 10.23));
                    pins.digitalWritePin(DigitalPin.P15, 0);
                }
                if (mode < 0) {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    pins.analogWritePin(AnalogPin.P15, Math.round(-mode * 10.23));
                }
                if (mode == 0) {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                }
                break;
        }
    }

    //% color="#a9a9a9" weight=58 blockId=eureka_relay block="Relay (digital) write|%mode|,port|%pin|" group="Accessory relay"
    export function eureka_relay(mode: onoff, pin: eureka_IO) {
        switch (pin) {
            case eureka_IO.A:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P0, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P0, 0);
                }
            case eureka_IO.B:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P1, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P1, 0);
                }
            case eureka_IO.C:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P2, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P2, 0);
                }
        }
    }
    //% color="#a9a9a9" weight=56 blockId=eureka_relay_2 block="Relay (analog) write|%syuturyoku|,port|%pin|" group="Accessory relay"
    //% syuturyoku.min=0 syuturyoku.max=1023
    export function eureka_relay_2(syuturyoku: number, pin: eureka_IO) {
        switch (pin) {
            case eureka_IO.A: {
                return pins.analogWritePin(AnalogPin.P0, syuturyoku);
            }
            case eureka_IO.B: {
                return pins.analogWritePin(AnalogPin.P1, syuturyoku);
            }
            case eureka_IO.C: {
                return pins.analogWritePin(AnalogPin.P2, syuturyoku);
            }
        }
    }


    //% color="#20b2aa" weight=52 blockId=eureka_m_driver block="Motor driver operate motors|%mode| port|%pin|" group="Motor driver"
    export function eureka_m_driver(mode: moter_d, pin: eureka_denki) {
        switch (pin) {
            case eureka_denki.A:
                if (mode == moter_d.L_and_R_forward) {
                    pins.digitalWritePin(DigitalPin.P0, 1);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 1);
                }
                if (mode == moter_d.L_and_R_backward) {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 1);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                }
                if (mode == moter_d.L_forward) {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 1);
                }
                if (mode == moter_d.R_forward) {
                    pins.digitalWritePin(DigitalPin.P0, 1);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                }
                if (mode == moter_d.L_backward) {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 1);
                    pins.digitalWritePin(DigitalPin.P14, 1);
                }
                if (mode == moter_d.R_backward) {
                    pins.digitalWritePin(DigitalPin.P0, 1);
                    pins.digitalWritePin(DigitalPin.P13, 1);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                }
                if (mode == moter_d.Stop) {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                }
                break;
            case eureka_denki.B:
                if (mode == moter_d.L_and_R_forward) {
                    pins.digitalWritePin(DigitalPin.P1, 1);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    pins.digitalWritePin(DigitalPin.P16, 1);
                }
                if (mode == moter_d.L_and_R_backward) {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    pins.digitalWritePin(DigitalPin.P15, 1);
                    pins.digitalWritePin(DigitalPin.P16, 0);
                }
                if (mode == moter_d.L_forward) {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    pins.digitalWritePin(DigitalPin.P16, 1);
                }
                if (mode == moter_d.R_forward) {
                    pins.digitalWritePin(DigitalPin.P1, 1);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    pins.digitalWritePin(DigitalPin.P16, 0);
                }
                if (mode == moter_d.L_backward) {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    pins.digitalWritePin(DigitalPin.P15, 1);
                    pins.digitalWritePin(DigitalPin.P16, 1);
                }
                if (mode == moter_d.R_backward) {
                    pins.digitalWritePin(DigitalPin.P1, 1);
                    pins.digitalWritePin(DigitalPin.P15, 1);
                    pins.digitalWritePin(DigitalPin.P16, 0);
                }
                if (mode == moter_d.Stop) {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    pins.digitalWritePin(DigitalPin.P16, 0);
                }
                break;
        }
    }

    //% color="#ffd700"  weight=40 blockId=eureka_light block="Light sensor value,port|%pin|" group="5_Accessory sensors"
    //% advanced=true
    export function tantai_light(pin: eureka_IO): number {
        switch (pin) {
            case eureka_IO.A:
                return Math.round((pins.analogReadPin(AnalogPin.P0) / 1023) * 100);
            case eureka_IO.B:
                return Math.round((pins.analogReadPin(AnalogPin.P1) / 1023) * 100);
            case eureka_IO.C:
                return Math.round((pins.analogReadPin(AnalogPin.P2) / 1023) * 100);
        }
    }

    //% color="#ffd700"  blockID=tantai_Light weight=38 block="Light sensor darker than|%limit|,port|%pin|" group="5_Accessory sensors"
    //% advanced=true
    //% limit.min=0 limit.max=100
    export function tantai_Light(limit: number, pin: eureka_IO): boolean {
        switch (pin) {
            case eureka_IO.A:
                if ((pins.analogReadPin(AnalogPin.P0) / 1023) * 100 < limit) {
                    return true;
                } else {
                    return false;
                }
                break;
            case eureka_IO.B:
                if ((pins.analogReadPin(AnalogPin.P1) / 1023) * 100 < limit) {
                    return true;
                } else {
                    return false;
                }
                break;
            case eureka_IO.C:
                if ((pins.analogReadPin(AnalogPin.P2) / 1023) * 100 < limit) {
                    return true;
                } else {
                    return false;
                }
                break;
        }
    }

    //% color="#858585" weight=36 block="Human in motio,port|%pin|" group="5_Accessory sensors"
    //% advanced=true
    export function tantai_humanDetection(pin: eureka_IO): boolean {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        switch (pin) {
            case eureka_IO.A:
                pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
                if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                    return true;
                } else {
                    return false;
                }
                break;
            case eureka_IO.B:
                pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
                if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                    return true;
                } else {
                    return false;
                }
                break;
            case eureka_IO.C:
                pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
                if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                    return true;
                } else {
                    return false;
                }
                break;
        }
    }
    //% color="#858585" weight=34 blockId=eureka_human block="HDS binary, port|%pin|" group="5_Accessory sensors"
    //% advanced=true
    export function eureka_human(pin: eureka_IO): number {
        switch (pin) {
            case eureka_IO.A:
                pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
                return pins.digitalReadPin(DigitalPin.P0);
            case eureka_IO.B:
                pins.setPull(DigitalPin.P1, PinPullMode.PullNone);
                return pins.digitalReadPin(DigitalPin.P1);
            case eureka_IO.C:
                pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
                return pins.digitalReadPin(DigitalPin.P2);
        }
    }




    //% color="#ff7b00" weight=32 blockId=eureka_temp block="Temp sensor, MCP, port|%pin|" group="5_Accessory sensors"
    //% advanced=true
    export function eureka_temp(pin: eureka_IO): number {
        switch (pin) {
            case eureka_IO.A:
                return Math.round(
                    ((pins.analogReadPin(AnalogPin.P0) * 3250) / 1024 - 500) / 10
                );
                break;
            case eureka_IO.B:
                return Math.round(
                    ((pins.analogReadPin(AnalogPin.P1) * 3250) / 1024 - 500) / 10
                );
                break;
            case eureka_IO.C:
                return Math.round(
                    ((pins.analogReadPin(AnalogPin.P2) * 3250) / 1024 - 500) / 10
                );
                break;
        }
    }

    //% color="#2a2aba" weight=30 blockId=sonar_ping block="Distance sensor|%sonar_quality|,port|%pin|" group="Distance sensor (ultrasonic)"
    export function ping(sonar_quality: sonar_avg, pin: eureka_tlp): number {
        if (sonar_quality == sonar_avg.avg_20_meas) {
            sonar_quality = 20
        }
        if (sonar_quality == sonar_avg.avg_5_meas) {
            sonar_quality = 5
        }
        if (sonar_quality == sonar_avg.One_shot_meas) {
            sonar_quality = 1
        }
        let d1 = 0;
        let d2 = 0;

        switch (pin) {


            case eureka_tlp.A:
                for (let i = 0; i < sonar_quality; i++) {
                    basic.pause(5);
                    pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    control.waitMicros(2);
                    pins.digitalWritePin(DigitalPin.P13, 1);
                    control.waitMicros(10);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    // read
                    d1 = pins.pulseIn(DigitalPin.P14, PulseValue.High, 500 * 58);
                    d2 = d2 + d1;
                }
                return Math.round(Math.idiv(d2 / sonar_quality, 58) * 1.5);
                break;

            case eureka_tlp.B:
                for (let i = 0; i < sonar_quality; i++) {
                    basic.pause(20);
                    pins.setPull(DigitalPin.P15, PinPullMode.PullNone);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    control.waitMicros(2);
                    pins.digitalWritePin(DigitalPin.P15, 1);
                    control.waitMicros(10);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    // read
                    d1 = pins.pulseIn(DigitalPin.P16, PulseValue.High, 500 * 58);
                    d2 = d2 + d1;
                }
                return Math.round(Math.idiv(d2 / sonar_quality, 58) * 1.5);
        }
    }


    //% color="#2a2aba" weight=27 blockId=sonar_ping_3 block="Distance farther than|%limit|cm,port|%pin|" group="Distance sensor (ultrasonic)"
    //% limit.min=0 limit.max=50
    export function sonar_ping_3(limit: number, pin: eureka_tlp): boolean {
        let d1 = 0;
        let d2 = 0;

        switch (pin) {
            case eureka_tlp.A:
                for (let i = 0; i < 20; i++) {
                    // send
                    basic.pause(5);
                    pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    control.waitMicros(2);
                    pins.digitalWritePin(DigitalPin.P13, 1);
                    control.waitMicros(10);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    // read
                    d1 = pins.pulseIn(DigitalPin.P14, PulseValue.High, 500 * 58);
                    d2 = d1 + d2;
                }
                if (Math.idiv(d2 / 20, 58) * 1.5 < limit) {
                    return false;
                } else {
                    return true;
                }

            case eureka_tlp.B:
                for (let i = 0; i < 20; i++) {
                    // send
                    basic.pause(5);
                    pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    control.waitMicros(2);
                    pins.digitalWritePin(DigitalPin.P15, 1);
                    control.waitMicros(10);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    // read
                    d1 = pins.pulseIn(DigitalPin.P16, PulseValue.High, 500 * 58);
                    d2 = d1 + d2;
                }

                if (Math.idiv(d2 / 20, 58) * 1.5 < limit) {
                    return false;
                } else {
                    return true;
                }

        }
    }



    //% color="#2a2aba" weight=28 blockId=sonar_ping_4 block="Distance closer than|%limit|cm,port|%pin|" group="Distance sensor (ultrasonic)"
    //% limit.min=0 limit.max=50
    export function sonar_ping_4(limit: number, pin: eureka_tlp): boolean {
        let d1 = 0;
        let d2 = 0;

        switch (pin) {
            case eureka_tlp.A:
                for (let i = 0; i < 20; i++) {
                    // send
                    basic.pause(5);
                    pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    control.waitMicros(2);
                    pins.digitalWritePin(DigitalPin.P13, 1);
                    control.waitMicros(10);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    // read
                    d1 = pins.pulseIn(DigitalPin.P14, PulseValue.High, 500 * 58);
                    d2 = d1 + d2;
                }
                if (Math.idiv(d2 / 20, 58) * 1.5 < limit) {
                    return true;
                } else {
                    return false;
                }

            case eureka_tlp.B:
                for (let i = 0; i < 20; i++) {
                    // send
                    basic.pause(5);
                    pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    control.waitMicros(2);
                    pins.digitalWritePin(DigitalPin.P15, 1);
                    control.waitMicros(10);
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    // read
                    d1 = pins.pulseIn(DigitalPin.P16, PulseValue.High, 500 * 58);
                    d2 = d1 + d2;
                }

                if (Math.idiv(d2 / 20, 58) * 1.5 < limit) {
                    return true;
                } else {
                    return false;
                }

        }
    }

    //% color="#f071bd" weight=26 blockId=eureka_CdS block="Photoreflector, port|%pin|" group="5_Accessory sensors"
    //% advanced=true
    export function eureka_CdS(pin: eureka_IO): number {
        switch (pin) {
            case eureka_IO.A:
                return (pins.analogReadPin(AnalogPin.P0) / 1023) * 100;
            case eureka_IO.B:
                return (pins.analogReadPin(AnalogPin.P1) / 1023) * 100;
            case eureka_IO.C:
                return (pins.analogReadPin(AnalogPin.P2) / 1023) * 100;
        }
    }

    //% color="#ff7b00" weight=54 blockId=eureka_white block="LED|%mode|,port|%pin|" group="LED"
    //% advanced=true
    export function eureka_white(mode: onoff, port: eureka_IO) {
        switch (port) {
            case eureka_IO.A:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P0, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P0, 0);
                }
            case eureka_IO.B:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P1, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P1, 0);
                }
            case eureka_IO.C:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P2, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P2, 0);
                }
        }
    }




    //% color="#ff7b00" weight=17 blockId=eureka_whiteselect block="LED|%mode|,time(sec)|%LED_time|,port|%pin|" group="LED"
    //% advanced=true
    export function eureka_whiteselect(mode: onoff, LED_time: LED_wait, port: eureka_IO) {
        switch (port) {
            case eureka_IO.A:
                if (mode == onoff.ON) {
                    pins.digitalWritePin(DigitalPin.P0, 1);
                    basic.pause(LED_time * 200);
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    basic.pause(LED_time * 200);
                    return
                }
            case eureka_IO.B:
                if (mode == onoff.ON) {
                    pins.digitalWritePin(DigitalPin.P1, 1);
                    basic.pause(LED_time * 200);
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    basic.pause(LED_time * 200);
                    return
                }
            case eureka_IO.C:
                if (mode == onoff.ON) {
                    pins.digitalWritePin(DigitalPin.P2, 1);
                    basic.pause(LED_time * 200);
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P2, 0);
                    basic.pause(LED_time * 200);
                    return
                }
        }
    }



    //% color="#ff7b00" weight=17 blockId=eureka_white2 block="LED blinking|%mode|,port|%pin|" group="LED"
    //% advanced=true
    export function eureka_white2(mode: LED_onoff, port: eureka_IO) {
        switch (port) {
            case eureka_IO.A:
                pins.digitalWritePin(DigitalPin.P0, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    basic.pause(mode);
                    return
                }

            case eureka_IO.B:
                pins.digitalWritePin(DigitalPin.P1, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    basic.pause(mode);
                    return
                }
            case eureka_IO.C:
                pins.digitalWritePin(DigitalPin.P2, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P2, 0);
                    basic.pause(mode);
                    return
                }

        }
    }



    //% color="#858585" weight=54 blockId=eureka_fullcolor block="|%color|LED blinking |%mode|,port|%pin|" group="Color LED(s)"
    //% advanced=true
    export function eureka_fullcolor(color: LED_color, mode: LED_onoff, pin: eureka_tlp) {
        switch (color) {
            case LED_color.Red:
                pins.digitalWritePin(DigitalPin.P0, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.Orange:
                pins.digitalWritePin(DigitalPin.P0, 1);
                pins.analogWritePin(AnalogPin.P13, 240)
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.Yellow:
                pins.digitalWritePin(DigitalPin.P0, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.Green:
                pins.digitalWritePin(DigitalPin.P13, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.Light_blue:
                pins.analogWritePin(AnalogPin.P0, 388)
                pins.digitalWritePin(DigitalPin.P13, 1);
                pins.analogWritePin(AnalogPin.P14, 767)
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.Blue:
                pins.digitalWritePin(DigitalPin.P14, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.Purple:
                pins.analogWritePin(AnalogPin.P0, 338)
                pins.digitalWritePin(DigitalPin.P14, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.White:
                pins.digitalWritePin(DigitalPin.P0, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                pins.digitalWritePin(DigitalPin.P14, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
        }
    }

    //% color="#4741f1" weight=53 blockId=eureka_full_blue block="Blue LED|%mode|,port|%pin|" group="Color LED(s)"
    //% advanced=true
    export function eureka_full_blue(mode: onoff, pin: eureka_tlp) {
        switch (pin) {
            case eureka_tlp.A:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P14, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P14, 0);
                }
            case eureka_tlp.B:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P16, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P16, 0);
                }
        }
    }

    //% color="#32cd32" weight=52 blockId=eureka_full_green block="Yellow LED|%mode|,port|%pin|" group="Color LED(s)"
    //% advanced=true
    export function eureka_full_green(mode: onoff, pin: eureka_tlp) {
        switch (pin) {
            case eureka_tlp.A:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P13, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P13, 0);
                }
            case eureka_tlp.B:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P15, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P15, 0);
                }
        }
    }

    //% color="#ff4940" weight=51 blockId=eureka_full_red block="Red LED |%mode|,port|%pin|" group="Color LED(s)"
    //% advanced=true
    export function eureka_full_red(mode: onoff, pin: eureka_tlp) {
        switch (pin) {
            case eureka_tlp.A:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P0, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P0, 0);
                }
            case eureka_tlp.B:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P1, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P1, 0);
                }
        }
    }











}


//% color="#32cd32" weight=10 block="with accessories"

namespace eureka_blocks {

    //% color="#4741f1" weight=70 blockId=eureka_tl_blue block="Blue LED|%mode|,port|%pin|" group="2 Traffic Unit"
    //% advanced=true
    export function eureka_tl_blue(mode: onoff, pin: eureka_tlp) {
        switch (pin) {
            case eureka_tlp.A:
                if (mode == onoff.ON) {
                    pins.digitalWritePin(DigitalPin.P14, 1);
                    return basic.pause(5);
                } else {
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    return basic.pause(5);
                }
            case eureka_tlp.B:
                if (mode == onoff.ON) {
                    pins.digitalWritePin(DigitalPin.P16, 1);
                    return basic.pause(5);
                } else {
                    pins.digitalWritePin(DigitalPin.P16, 0);
                    return basic.pause(5);
                }
        }
    }
    //% color="#ffa800" weight=87 blockId=eureka_tl_yellow block="Yellow LED|%mode|,port|%pin|" group="2 Traffic Unit"
    //% advanced=true
    export function eureka_tl_yellow(mode: onoff, pin: eureka_tlp) {
        switch (pin) {
            case eureka_tlp.A:
                if (mode == onoff.ON) {
                    pins.digitalWritePin(DigitalPin.P13, 1);
                    return basic.pause(5);
                } else {
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    return basic.pause(5);
                }
            case eureka_tlp.B:
                if (mode == onoff.ON) {
                    pins.digitalWritePin(DigitalPin.P15, 1);
                    return basic.pause(5);
                } else {
                    pins.digitalWritePin(DigitalPin.P15, 0);
                    return basic.pause(5);
                }
        }
    }
    //% color="#ff4940" weight=85 blockId=eureka_tl_red block="Red LED|%mode|,port|%pin|" group="2 Traffic Unit"
    //% advanced=true
    export function eureka_tl_red(mode: onoff, pin: eureka_tlp) {
        switch (pin) {
            case eureka_tlp.A:
                if (mode == onoff.ON) {
                    pins.digitalWritePin(DigitalPin.P0, 1);
                    return basic.pause(5);
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    return basic.pause(5);
                }
            case eureka_tlp.B:
                if (mode == onoff.ON) {
                    pins.digitalWritePin(DigitalPin.P1, 1);
                    return basic.pause(5);
                } else {
                    pins.digitalWritePin(DigitalPin.P1, 0);
                    return basic.pause(5);
                }
        }
    }

    //% color="#1E90FF" weight=83 block="Wait time (sec)|%second|" group="2 "
    //% advanced=true
    //% second.min=0 second.max=10
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }

    //% color="#228b22"  weight=82 blockId=eureka_denkiLED block="Show light sensor values, port|%tlp|" group="3 electric Unit"
    export function eureka_denkiLED(tlp: eureka_tlp) {
        switch (tlp) {
            case eureka_tlp.A:
                basic.showNumber(Math.round((pins.analogReadPin(AnalogPin.P0) / 1023) * 100));
                break;
            case eureka_tlp.B:
                basic.showNumber(Math.round((pins.analogReadPin(AnalogPin.P1) / 1023) * 100));
                break;
        }
    }



    //% color="#009A00"  weight=81 block="Light sensor value darker than|%limit|,port|%tlp|" group="3 electric Unit"
    //% limit.min=0 limit.max=100
    export function decideLight(limit: number, tlp: eureka_tlp): boolean {
        switch (tlp) {
            case eureka_tlp.A:
                if ((pins.analogReadPin(AnalogPin.P0) / 1023) * 100 < limit) {
                    return true;
                } else {
                    return false;
                }
                break;
            case eureka_tlp.B:
                if ((pins.analogReadPin(AnalogPin.P1) / 1023) * 100 < limit) {
                    return true;
                } else {
                    return false;
                }
                break;
        }
    }



    //% color="#009A00"  weight=80 blockId=eureka_denkitemp block="Light sensor value, port|%pin|" group="3 electric Unit"
    export function eureka_denkitemp(pin: eureka_denki): number {
        switch (pin) {
            case eureka_denki.A:
                return Math.round((pins.analogReadPin(AnalogPin.P0) / 1023) * 100);
            case eureka_denki.B:
                return Math.round((pins.analogReadPin(AnalogPin.P1) / 1023) * 100);
        }
    }
    //% color="#a0522d"  weight=77 blockId=eureka_denkihuman block="Human detecting sensor binary, port|%pin|" group="3 electric Unit"
    export function eureka_denkihuman(pin: eureka_denki): number {
        switch (pin) {
            case eureka_denki.A:
                pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
                return pins.digitalReadPin(DigitalPin.P14);
            case eureka_denki.B:
                pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
                return pins.digitalReadPin(DigitalPin.P16);
        }
    }


    //% color="#a0522d"  weight=79 blockId=eureka_denkihumanLED block="Show human detecting sensor binary, port|%pin|" group="3 electric Unit"
    export function eureka_denkihumanLED(pin: eureka_p1416) {

        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        switch (pin) {
            case eureka_p1416.A:
                basic.showNumber(pins.digitalReadPin(DigitalPin.P14));
                break;
            case eureka_p1416.B:
                basic.showNumber(pins.digitalReadPin(DigitalPin.P16));
                break;
        }
    }




    //% color="#a0522d" weight=78 block="Human detecting sensor binary, port|%pin|" group="3 electric Unit"
    export function humanDetection(pin: eureka_p1416): boolean {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        switch (pin) {
            case eureka_p1416.A:
                if (pins.digitalReadPin(DigitalPin.P14) == 1) {
                    return true;
                } else {
                    return false;
                }
                break;
            case eureka_p1416.B:
                if (pins.digitalReadPin(DigitalPin.P16) == 1) {
                    return true;
                } else {
                    return false;
                }
                break;
        }
    }



    //% color="#a9a9a9"  weight=75 blockId=eureka_denkiwhite block="LED |%mode| ﾎﾟｰﾄ|%pin|" group="3 electric Unit"
    export function eureka_denkiwhite(mode: onoff, port: eureka_denki) {
        switch (port) {
            case eureka_denki.A:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P13, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P13, 0);
                }
            case eureka_denki.B:
                if (mode == onoff.ON) {
                    return pins.digitalWritePin(DigitalPin.P15, 1);
                } else {
                    return pins.digitalWritePin(DigitalPin.P15, 0);
                }
        }
    }
}
