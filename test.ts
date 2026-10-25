// Compile representative APIs without driving sensors during startup.
function testIoApi(): void {
    io.neopixel_blue_block(onoff.ON)
    io.neopixel_white_block(onoff.OFF, 15)
    io.microbit2_decideLight(50, io.BT.lighter)
    io.IO_humanDetection()
    io.IO_relay(onoff.OFF)
    io.temperatureWithPin()
    io.color_green_blue_threshold(90)
    io.color_red_green_threshold(150)
    io.color_ID()
    io.ultrasonic_compare_auto(io.ultrasonicCompare.Shorter, 20)
}
