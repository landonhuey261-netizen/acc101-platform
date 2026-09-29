'use strict';

const { escapeHtml, layout, courseSidebar } = require('./helpers');

/**
 * Video Library. The five resources below are the VERIFIED resources from the
 * course build brief. Never add, invent, or alter URLs here.
 */
const RESOURCES = [
  {
    title: 'ACCOUNTING BASICS: a Guide to (Almost) Everything',
    byline: 'Accounting Stuff \u00b7 single video \u00b7 ~13 minutes',
    watchUrl: 'https://www.youtube.com/watch?v=yYX4bvQSqbo',
    embedUrl: 'https://www.youtube.com/embed/yYX4bvQSqbo',
    covers: 'A brisk walkthrough of the full 8-step accounting cycle: the accounting equation, ' +
      'debits and credits, journal entries, T-accounts, the trial balance, adjusting entries, ' +
      'financial statements, and closing entries.',
    when: 'Watch with Module 1 as a friendly first tour of the whole course, and again with ' +
      'Module 4 when you recap the complete accounting cycle.',
  },
  {
    title: 'Accounting and financial statements',
    byline: 'Khan Academy \u00b7 playlist \u00b7 11 videos',
    watchUrl: 'https://www.youtube.com/playlist?list=PLSQl0a2vh4HAHUM1CLDf4YnxpX-WmxKZi',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLSQl0a2vh4HAHUM1CLDf4YnxpX-WmxKZi',
    covers: 'Accrual vs. cash accounting, depreciation, and cash flow statement basics \u2014 ' +
      'short, clear explainers on the trickiest conceptual foundations.',
    when: 'Module 3 (accrual vs. cash), Module 9 (depreciation), and Module 12 (cash flow basics).',
  },
  {
    title: 'Fundamentals of Accounting',
    byline: 'College-style lecture series \u00b7 playlist \u00b7 42 videos',
    watchUrl: 'http://www.youtube.com/playlist?list=PLerzWq9nGRYciMKaElwxUYsGx_UCWpgML',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLerzWq9nGRYciMKaElwxUYsGx_UCWpgML',
    covers: 'Why accounting matters, the conceptual framework, debits and credits, the chart of ' +
      'accounts, journal entries, posting, the trial balance, every adjusting-entry type, the ' +
      'worksheet, financial statements, closing entries, merchandising, discounts, and returns.',
    when: 'Module 2 (journalizing / trial balance lectures), Module 3 (adjusting entries lectures), ' +
      'Module 4 (financial statements / closing lectures), Module 5 (merchandising lectures). ' +
      'Each module\u2019s video block tells you which lecture numbers to watch.',
  },
  {
    title: 'Free Courses \u2014 full accounting course library',
    byline: 'Playlist collection \u00b7 multiple full courses',
    watchUrl: 'http://www.youtube.com/playlist?list=PLSlzC-HFo7w4zaKMQhAVbBRZJfpTE7Vm_',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLSlzC-HFo7w4zaKMQhAVbBRZJfpTE7Vm_',
    covers: 'Complete Financial Accounting Course (11-hour full tutorial for beginners), Complete ' +
      'Managerial Accounting Course (10 hours), a full Finance Course (11 hours), and ' +
      'Intermediate Financial Accounting 1 & 2 (12 hours each).',
    when: 'Go-deeper / next-courses shelf. Use alongside Modules 6, 10, and 11 as supplemental ' +
      'lectures, or work through a full course after you finish ACC 101.',
  },
  {
    title: 'Accounting Stuff',
    byline: 'YouTube channel \u00b7 short topic videos + quizzes',
    watchUrl: 'https://www.youtube.com/@AccountingStuff',
    embedUrl: null,
    covers: 'Bite-size, topic-by-topic videos with quizzes \u2014 perfect quick refreshers when a ' +
      'single concept (like debits and credits or depreciation) needs one more pass.',
    when: 'Anytime you want a 5-minute refresher on a single topic from any module.',
  },
];

function videosPage(user, course, enrolled, modules, doneByNum) {
  const base = '/c/' + course.slug;
  const cards = RESOURCES.map((r) => {
    const embed = r.embedUrl
      ? '<div class="video-embed">\n' +
        '  <iframe src="' + escapeHtml(r.embedUrl) + '" title="' + escapeHtml(r.title) + '" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
        'allowfullscreen loading="lazy"></iframe>\n' +
        '</div>\n'
      : '';
    return (
      '<article class="card video-card">\n' +
      '  <h2>' + escapeHtml(r.title) + '</h2>\n' +
      '  <p class="video-byline">' + escapeHtml(r.byline) + '</p>\n' +
      embed +
      '  <p><strong>What it covers:</strong> ' + escapeHtml(r.covers) + '</p>\n' +
      '  <p><strong>When to watch:</strong> ' + escapeHtml(r.when) + '</p>\n' +
      '  <p><a class="btn btn-small" href="' + escapeHtml(r.watchUrl) + '" target="_blank" rel="noopener">Watch on YouTube</a></p>\n' +
      '</article>'
    );
  }).join('\n');

  return layout({
    title: 'Video Library \u2014 ' + course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'courses',
    courseNav: courseSidebar({
      course,
      modules: modules || [],
      doneByNum: doneByNum || {},
      current: { type: 'page', key: 'videos' },
    }),
    body:
      '<section class="page-head">\n' +
      '  <p class="eyebrow"><a href="' + base + '/dashboard">' + escapeHtml(course.title) + '</a></p>\n' +
      '  <h1>Video Library</h1>\n' +
      '  <p class="section-sub">Five hand-verified video resources, mapped to the weeks of the course. ' +
      'Every module page also embeds the right video for that module.</p>\n' +
      '</section>\n' +
      '<div class="video-list">\n' + cards + '\n</div>',
  });
}

module.exports = { videosPage };
