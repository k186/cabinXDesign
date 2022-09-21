```javascript

        export default {
            data () {
                return {
                    daily: {},
                    daily1: {},
                    daily2: {},
                    daily3: {},
                    daily4: {},
                    daily5: {},
                    daily6: {},
                    selectRange:[new Date(),new Date('2021-12-1')]

                }
            },
            mounted () {
                // this.initData();
            },
            methods: {
                initData () {
                    let today = new Date();
                    let month=today.getMonth()+1;
                    this.daily1 = {
                        value: 1,
                        startTime: today,
                        frequency: 1,
                        unit: 'day',
                        unitRule: null,
                        daysOfMonth: [today.getDate()],
                        dayOfWeek: [today.getDay()],
                        week: this.getWeekNumber(today),
                        endTime: null,
                        monthsOfYear:[month]
                    };
                    this.daily2 = {
                        value: 2,
                        startTime: today,
                        frequency: 1,
                        unit: 'week',
                        unitRule: null,
                        daysOfMonth: [today.getDate()],
                        dayOfWeek: [today.getDay()],
                        week: this.getWeekNumber(today),
                        endTime: null,
                        monthsOfYear:[month]
                    }
                    this.daily3 = {
                        value: 3,
                        startTime: today,
                        frequency: 1,
                        unit: 'month',
                        unitRule: 'week',
                        daysOfMonth: [today.getDate()],
                        dayOfWeek: [today.getDay()],
                        week: this.getWeekNumber(today),
                        endTime: null,
                        monthsOfYear:[month]
                    }
                    this.daily4 = {
                        value: 4,
                        startTime: today,
                        frequency: 1,
                        unit: 'year',
                        unitRule: null,
                        daysOfMonth: [today.getDate()],
                        dayOfWeek: [today.getDay()],
                        week: this.getWeekNumber(today),
                        endTime: null,
                        monthsOfYear:[month]
                    }
                    this.daily5 = {
                        value: 5,
                        startTime: today,
                        frequency: 1,
                        unit: 'week',
                        unitRule: null,
                        daysOfMonth: [today.getDate()],
                        dayOfWeek: [1, 2, 3, 4, 5],
                        week: this.getWeekNumber(today),
                        endTime: null,
                        monthsOfYear:[month]
                    }

                    this.daily6 = {
                        value: 6,
                        startTime: today,
                        frequency: 1,
                        unit: 'month',
                        unitRule: 'day',
                        daysOfMonth: [today.getDate(),today.getDate()+3],
                        dayOfWeek: [1],
                        week: this.getWeekNumber(today),
                        endTime: new Date('2022.1.2'),
                        monthsOfYear:[month]
                    }
                    this.daily = this.daily6
                },
                getWeekNumber (date) {
                    const lastSaturday = date.getDate() + (6 - date.getDay());
                    return Math.ceil(lastSaturday / 7)
                }
            }
        };


```