function logger () {
    console.log('Logging to the console...')
  }
  
  
  function logCaller () {
  
    try { // First, try to execute this code.
      logger()
    } catch (e) { // if it fails, execute this block instead.
      console.log('Error!')
    }
  }
  
  logCaller()