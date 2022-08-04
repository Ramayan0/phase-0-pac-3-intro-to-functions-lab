function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
    
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string)  {
    const cantHearYou = "I can't hear you!";
    const yesCanHear = "YES INDEED!";
    const love = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return cantHearYou;
    }
    else if (string.toUpperCase(string) === string) {
      return yesCanHear;
    }
    else if ("Let's have dinner together!"=== string) {
      return love
    }
  }