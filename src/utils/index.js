const isExpire = function(start,day) {
  let date = new Date(start).valueOf();
  date = date + Number(day) * 24 * 60 * 60 * 1000;
  const ExpireTime = + new Date(date)
  if (!ExpireTime) {
    return true;
  }
  return Date.now() >= ExpireTime;
}

export default isExpire