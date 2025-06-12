1. How did you handle state updates when the text changed?

The text state is captured with an onChange event handler on the textarea input element. The handler is passed down from the CharacterCounter parent component and receives the text from the input when it changes. The handler takes the text and uses .length and .split to calculate the character and word counts.

2. What considerations did you make when calculating reading time?

When calculating reading time, I used the Date.now function in order to get the current time in milliseconds, which is then converted into seconds and minutes for the display. The time is updated by the onChange handler, so it changes along with the other counts. For more accurate timing, it could be done with an interval timer, but this level of detail is not really needed for this application.

3. How did you ensure the UI remained responsive during rapid text input?

Using React, only the changed pieces of the UI are updated: the three counts and their states along with the progress bar. By avoiding full page refreshes, the UI updates as quickly as the user can type.

4. What challenges did you face when implementing the statistics calculations?

Calculating the statistics was pretty straightforward with the built-in string functions. The biggest challenge was implementing a progress bar. I was unable to get it to work consitently with Tailwind class styling (e..g, w-[55%]), so after several hours of trying, I switched it to inline CSS styling (width: 55%) which worked without a hitch.
