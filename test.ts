// Compile representative APIs without driving sensors during startup.
function testIoApi(): void {
    ioV2.neopixel_blue_block(onoff.ON)
    ioV2.neopixel_white_block(onoff.OFF, 15)
    ioV2.microbit2_decideLight(50, ioV2.BT.lighter)
    ioV2.IO_humanDetection()
    ioV2.IO_relay(onoff.OFF)
    ioV2.temperatureWithPin()
    ioV2.color_green_blue_threshold(90)
    ioV2.color_red_green_threshold(150)
    ioV2.color_ID()
    ioV2.ultrasonic_compare_auto(ioV2.ultrasonicCompare.Shorter, 20)
}
