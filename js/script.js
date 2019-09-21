function init() {
    const $video = document.getElementById('video');
    const $canvas = document.getElementById('canvas');
    const $context = $canvas.getContext('2d');
    const $tracker = new tracking.ObjectTracker('face')
    tracking.track('#video', $tracker, {camera: true})
    $tracker.on('track', event => {
        $context.clearRect(0,0, $canvas.width, $canvas.height);
        event.data.forEach( rect => {
            $context.strokeStyle = "#f00";
            $context.lineWidth = 2;
            $context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        });
    })
}
window.onload = init();