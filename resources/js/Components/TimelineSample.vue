<script setup lang="ts">
const data = {
  1920: {
    January: [
      'Event 1 in January, 1920...',
      'Event 2 in January, 1920...',
      'Event 2 in January, 1920...',
      'Event 2 in January, 1920...',
      'Event 2 in January, 1920...',
      'Event 2 in January, 1920...',
      'Event 2 in January, 1920...',
      'Event 2 in January, 1920...',
    ],
    February: [
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 1 in February, 1920...',
      'Event 2 in February, 1920...',
    ],
    March: [
      'Event 1 in March, 1920...',
      'Event 2 in March, 1920...',
    ],
  },
  1921: {
    April: [
      'Event 1 in April, 1921...',
      'Event 1 in April, 1921...',
      'Event 1 in April, 1921...',
      'Event 1 in April, 1921...',
      'Event 1 in April, 1921...',
      'Event 2 in April, 1921...',
    ],
    May: [
      'Event 1 in May, 1921...',
      'Event 1 in May, 1921...',
      'Event 1 in May, 1921...',
      'Event 1 in May, 1921...',
      'Event 1 in May, 1921...',
      'Event 2 in May, 1921...',
    ],
    June: [
      'Event 1 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
      'Event 2 in June, 1921...',
    ],
  },
  1922: {
    July: [
      'Event 1 in July, 1922...',
      'Event 2 in July, 1922...',
      'Event 2 in July, 1922...',
      'Event 2 in July, 1922...',
      'Event 2 in July, 1922...',
      'Event 2 in July, 1922...',
    ],
    August: [
      'Event 1 in August, 1922...',
      'Event 2 in August, 1922...',
      'Event 2 in August, 1922...',
      'Event 2 in August, 1922...',
      'Event 2 in August, 1922...',
      'Event 2 in August, 1922...',
    ],
    September: [
      'Event 1 in September, 1922...',
      'Event 2 in September, 1922...',
      'Event 2 in September, 1922...',
      'Event 2 in September, 1922...',
      'Event 2 in September, 1922...',
      'Event 2 in September, 1922...',
    ],
  },
};
</script>

<template>
  <div class="gap-y-10 flex flex-col">
    <section v-for="(months, year) in data" :key="year" class="flex">
      <div class="year">
        {{ year }}
      </div>
      <div class="w-full">
        <div v-for="(events, month) in months" :key="month" class="flex">
          <div class="month">
            {{ month }}
          </div>
          <div class="events">
            <div v-for="event in events" :key="event" class="event">
              {{ event }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.year {
  width: 20%;
  height: 100%;
  position: sticky;
  top: 50px;
}

.month {
  width: 20%;
  height: 100%;
  position: sticky;
  top: 50px;
}
</style>
