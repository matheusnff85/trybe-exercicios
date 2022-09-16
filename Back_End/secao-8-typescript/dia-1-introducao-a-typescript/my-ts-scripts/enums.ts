import readlineSnyc from "readline-sync";

export enum yearMonths {
  January = 'January',
  Febuary = 'Febuary',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}

export enum yearSeasons {
  Spring = 'Spring',
  Summer = 'Summer',
  Fall = 'Fall',
  Winter = 'Winter',
}

enum Norte {
  January = 'Winter',
  Febuary = 'Winter',
  March = 'Winter, Spring',
  April = 'Spring',
  May = 'Spring',
  June = 'Spring, Summer',
  July = 'Summer',
  August = 'Summer',
  September = 'Summer, Fall',
  October = 'Fall',
  November = 'Fall',
  December = 'Fall, Winter',
}

enum Sul {
  January = 'Summer',
  Febuary = 'Summer',
  March = 'Summer, Fall',
  April = 'Fall',
  May = 'Fall',
  June = 'Fall, Winter',
  July = 'Winter',
  August = 'Winter',
  September = 'Winter, Spring',
  October = 'Spring',
  November = 'Spring',
  December = 'Spring, Summer',
}
