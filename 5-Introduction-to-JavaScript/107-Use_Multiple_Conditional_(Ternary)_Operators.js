// This lesson taught how to chain ternaries together, but I recently learned
// that this is generally frowned upon. Keep for reference only.

function checkSign(num) {
  return (num > 0) ? "positive": (num < 0) ? "negative": "zero";
}

checkSign(0);
