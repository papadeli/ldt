﻿/****************** 
 * Ldt_Exper *
 ******************/


// store info about the experiment session:
let expName = 'LDT_exper';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineRoutineBegin());
flowScheduler.add(welcomeRoutineRoutineEachFrame());
flowScheduler.add(welcomeRoutineRoutineEnd());
const conditionLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(conditionLoopLoopBegin(conditionLoopLoopScheduler));
flowScheduler.add(conditionLoopLoopScheduler);
flowScheduler.add(conditionLoopLoopEnd);


flowScheduler.add(exitRoutineRoutineBegin());
flowScheduler.add(exitRoutineRoutineEachFrame());
flowScheduler.add(exitRoutineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeRoutineClock;
var instructionText;
var startKeyboard;
var conditionRoutineClock;
var conditionText;
var responseKeyboard;
var exitRoutineClock;
var thankYouText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcomeRoutine"
  welcomeRoutineClock = new util.Clock();
  instructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructionText',
    text: 'Welcome to the lexical decision task.\n\nYou will see a series of characters.\n\nIf it is a WORD, press RIGHT ARROW.\nIf NOT a word, press LEFT ARROW.\n\nPress SPACE to start.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  startKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "conditionRoutine"
  conditionRoutineClock = new util.Clock();
  conditionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'conditionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  responseKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exitRoutine"
  exitRoutineClock = new util.Clock();
  thankYouText = new visual.TextStim({
    win: psychoJS.window,
    name: 'thankYouText',
    text: 'Thank you for participating!\n\nPlease wait while we save your results ...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var welcomeRoutineMaxDurationReached;
var _startKeyboard_allKeys;
var welcomeRoutineMaxDuration;
var welcomeRoutineComponents;
function welcomeRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcomeRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    welcomeRoutineClock.reset();
    routineTimer.reset();
    welcomeRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    startKeyboard.keys = undefined;
    startKeyboard.rt = undefined;
    _startKeyboard_allKeys = [];
    psychoJS.experiment.addData('welcomeRoutine.started', globalClock.getTime());
    welcomeRoutineMaxDuration = null
    // keep track of which components have finished
    welcomeRoutineComponents = [];
    welcomeRoutineComponents.push(instructionText);
    welcomeRoutineComponents.push(startKeyboard);
    
    welcomeRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcomeRoutine' ---
    // get current time
    t = welcomeRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructionText* updates
    if (t >= 0.0 && instructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionText.tStart = t;  // (not accounting for frame time here)
      instructionText.frameNStart = frameN;  // exact frame index
      
      instructionText.setAutoDraw(true);
    }
    
    
    // *startKeyboard* updates
    if (t >= 0.0 && startKeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startKeyboard.tStart = t;  // (not accounting for frame time here)
      startKeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { startKeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { startKeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { startKeyboard.clearEvents(); });
    }
    
    if (startKeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = startKeyboard.getKeys({keyList: ['space'], waitRelease: false});
      _startKeyboard_allKeys = _startKeyboard_allKeys.concat(theseKeys);
      if (_startKeyboard_allKeys.length > 0) {
        startKeyboard.keys = _startKeyboard_allKeys[_startKeyboard_allKeys.length - 1].name;  // just the last key pressed
        startKeyboard.rt = _startKeyboard_allKeys[_startKeyboard_allKeys.length - 1].rt;
        startKeyboard.duration = _startKeyboard_allKeys[_startKeyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcomeRoutine' ---
    welcomeRoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcomeRoutine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(startKeyboard.corr, level);
    }
    psychoJS.experiment.addData('startKeyboard.keys', startKeyboard.keys);
    if (typeof startKeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('startKeyboard.rt', startKeyboard.rt);
        psychoJS.experiment.addData('startKeyboard.duration', startKeyboard.duration);
        routineTimer.reset();
        }
    
    startKeyboard.stop();
    // the Routine "welcomeRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var conditionLoop;
function conditionLoopLoopBegin(conditionLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    conditionLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.csv',
      seed: undefined, name: 'conditionLoop'
    });
    psychoJS.experiment.addLoop(conditionLoop); // add the loop to the experiment
    currentLoop = conditionLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    conditionLoop.forEach(function() {
      snapshot = conditionLoop.getSnapshot();
    
      conditionLoopLoopScheduler.add(importConditions(snapshot));
      conditionLoopLoopScheduler.add(conditionRoutineRoutineBegin(snapshot));
      conditionLoopLoopScheduler.add(conditionRoutineRoutineEachFrame());
      conditionLoopLoopScheduler.add(conditionRoutineRoutineEnd(snapshot));
      conditionLoopLoopScheduler.add(conditionLoopLoopEndIteration(conditionLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function conditionLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(conditionLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function conditionLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var conditionRoutineMaxDurationReached;
var _responseKeyboard_allKeys;
var conditionRoutineMaxDuration;
var conditionRoutineComponents;
function conditionRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'conditionRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    conditionRoutineClock.reset();
    routineTimer.reset();
    conditionRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    conditionText.setText(stimulus);
    responseKeyboard.keys = undefined;
    responseKeyboard.rt = undefined;
    _responseKeyboard_allKeys = [];
    psychoJS.experiment.addData('conditionRoutine.started', globalClock.getTime());
    conditionRoutineMaxDuration = null
    // keep track of which components have finished
    conditionRoutineComponents = [];
    conditionRoutineComponents.push(conditionText);
    conditionRoutineComponents.push(responseKeyboard);
    
    conditionRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function conditionRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'conditionRoutine' ---
    // get current time
    t = conditionRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *conditionText* updates
    if (t >= 0.0 && conditionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conditionText.tStart = t;  // (not accounting for frame time here)
      conditionText.frameNStart = frameN;  // exact frame index
      
      conditionText.setAutoDraw(true);
    }
    
    
    // *responseKeyboard* updates
    if (t >= 0.0 && responseKeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      responseKeyboard.tStart = t;  // (not accounting for frame time here)
      responseKeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { responseKeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { responseKeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { responseKeyboard.clearEvents(); });
    }
    
    if (responseKeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = responseKeyboard.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _responseKeyboard_allKeys = _responseKeyboard_allKeys.concat(theseKeys);
      if (_responseKeyboard_allKeys.length > 0) {
        responseKeyboard.keys = _responseKeyboard_allKeys[_responseKeyboard_allKeys.length - 1].name;  // just the last key pressed
        responseKeyboard.rt = _responseKeyboard_allKeys[_responseKeyboard_allKeys.length - 1].rt;
        responseKeyboard.duration = _responseKeyboard_allKeys[_responseKeyboard_allKeys.length - 1].duration;
        // was this correct?
        if (responseKeyboard.keys == answer) {
            responseKeyboard.corr = 1;
        } else {
            responseKeyboard.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    conditionRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function conditionRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'conditionRoutine' ---
    conditionRoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('conditionRoutine.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (responseKeyboard.keys === undefined) {
      if (['None','none',undefined].includes(answer)) {
         responseKeyboard.corr = 1;  // correct non-response
      } else {
         responseKeyboard.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(responseKeyboard.corr, level);
    }
    psychoJS.experiment.addData('responseKeyboard.keys', responseKeyboard.keys);
    psychoJS.experiment.addData('responseKeyboard.corr', responseKeyboard.corr);
    if (typeof responseKeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('responseKeyboard.rt', responseKeyboard.rt);
        psychoJS.experiment.addData('responseKeyboard.duration', responseKeyboard.duration);
        routineTimer.reset();
        }
    
    responseKeyboard.stop();
    // the Routine "conditionRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exitRoutineMaxDurationReached;
var exitRoutineMaxDuration;
var exitRoutineComponents;
function exitRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exitRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exitRoutineClock.reset();
    routineTimer.reset();
    exitRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS.__saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS.__experiment.__experimentName + '_' + psychoJS.__experiment.__datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS.__experiment.__trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString();
    }).join('\n');
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        },
        body: JSON.stringify({
            experimentID: '00DqBG2303Lm', // * UPDATE WITH YOUR DATAPIPE EXPERIMENT ID *
            filename: filename,
            data: data
        })
    })
    .then(response => response.json())
    .then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    .catch(error => {
        console.error('Error:', error);
    });
    psychoJS.experiment.addData('exitRoutine.started', globalClock.getTime());
    exitRoutineMaxDuration = null
    // keep track of which components have finished
    exitRoutineComponents = [];
    exitRoutineComponents.push(thankYouText);
    
    exitRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exitRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exitRoutine' ---
    // get current time
    t = exitRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thankYouText* updates
    if (t >= 0.0 && thankYouText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankYouText.tStart = t;  // (not accounting for frame time here)
      thankYouText.frameNStart = frameN;  // exact frame index
      
      thankYouText.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exitRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exitRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exitRoutine' ---
    exitRoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exitRoutine.stopped', globalClock.getTime());
    // the Routine "exitRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
