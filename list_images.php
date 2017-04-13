foreachglob('./images/*.{img}', GLOB_BRACE) {
    echo $filename;
}
