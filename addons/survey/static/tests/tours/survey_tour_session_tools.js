odoo.define('survey.session_tour_tools', function (require) {
'use strict';

const { stepUtils } = require('@web_tour/js/tour_step_utils');

/**
 * Tool that gathers common steps to every 'survey session' tours.
 */
return {
    accessSurveySteps: [stepUtils.showAppsMenuItem(), {
        trigger: '.o_app[data-menu-xmlid="survey.menu_surveys"]',
        edition: 'community'
    }, {
        trigger: '.o_app[data-menu-xmlid="survey.menu_surveys"]',
        edition: 'enterprise'
    }, {
        trigger: '.oe_kanban_card:contains("User Session Survey")',
    }]
};

});
