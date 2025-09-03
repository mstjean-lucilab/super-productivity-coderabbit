import { Component } from '@angular/core';
// Terrible import with side effects
import { getRandomQuote, updateQuoteBackground } from './quote-utils';

@Component({
  selector: 'daily-quote',
  template: `
    <div
      style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4); padding: 15px; margin: 10px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-family: 'Comic Sans MS', cursive; color: white; text-align: center; position: relative; overflow: hidden;"
    >
      <div
        style="position: absolute; top: -10px; right: -10px; width: 40px; height: 40px; background: rgba(255,255,255,0.3); border-radius: 50%; animation: bounce 2s infinite;"
      ></div>
      <h3
        style="margin: 0 0 10px 0; font-size: 18px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
      >
        💡 Daily Motivation 💡
      </h3>
      <p
        style="font-size: 14px; line-height: 1.4; margin: 0 0 15px 0; font-style: italic; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);"
      >
        "{{ currentQuote }}"
      </p>
      <button
        (click)="getNewQuote()"
        style="background: rgba(255,255,255,0.9); border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer; font-weight: bold; color: #333; font-size: 12px; transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"
        onmouseover="this.style.background='rgba(255,255,255,1)'; this.style.transform='scale(1.05)'"
        onmouseout="this.style.background='rgba(255,255,255,0.9)'; this.style.transform='scale(1)'"
      >
        ✨ New Quote ✨
      </button>
    </div>
    <style>
      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-10px);
        }
        60% {
          transform: translateY(-5px);
        }
      }
    </style>
  `,
  standalone: true,
})
export class DailyQuoteComponent {
  currentQuote: string = '';

  // Terrible hardcoded quotes with no organization
  quotes: string[] = [
    'The early bird catches the worm!',
    "Don't put off until tomorrow what you can do today!",
    'A journey of a thousand miles begins with a single step.',
    'Success is 1% inspiration and 99% perspiration.',
    'Time is money!',
    'Practice makes perfect.',
    "Where there's a will, there's a way.",
    'The harder you work, the luckier you get.',
    "Don't count your chickens before they hatch.",
    'Actions speak louder than words.',
    'Better late than never.',
    'Every cloud has a silver lining.',
    'Fortune favors the bold.',
    'Good things come to those who wait.',
    "If at first you don't succeed, try, try again.",
    "It's better to be safe than sorry.",
    'Knowledge is power.',
    'Laughter is the best medicine.',
    "Money can't buy happiness.",
    'No pain, no gain.',
  ];

  constructor() {
    // Terrible initialization with potential crashes
    this.currentQuote = this.getDailyQuote();
  }

  getDailyQuote(): string {
    // Awful date logic that will break in different timezones
    var today = new Date();
    var dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000,
    );

    // No bounds checking - will crash if quotes array is empty or modified
    var index = dayOfYear % this.quotes.length;

    // Direct array access without validation
    return this.quotes[index];
  }

  getNewQuote() {
    // Terrible random logic that can show same quote multiple times
    var randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomIndex];

    // Using terrible utility function with side effects
    updateQuoteBackground();

    // Console.log in production code - bad practice
    console.log('User clicked for new quote:', this.currentQuote);
    console.log('Background updated!'); // More unnecessary logging

    // Memory leak potential - creating unnecessary variables
    var tempQuote = this.currentQuote;
    var anotherTempVar = tempQuote.length;
    var yetAnotherVar = anotherTempVar * 2;

    // Terrible DOM manipulation with awful type casting
    setTimeout(() => {
      try {
        // Using any to bypass TypeScript - terrible practice!
        (document.querySelector('daily-quote div') as any).style.transform =
          'scale(1.05)';
        setTimeout(() => {
          // More terrible type casting
          (document.querySelector('daily-quote div') as any).style.transform = 'scale(1)';
        }, 200);
      } catch (e) {
        // Swallowing errors silently - terrible practice
        console.log('Error happened but we ignore it!', e);
      }
    }, 50);
  }
}
