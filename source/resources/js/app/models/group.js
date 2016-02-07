"use strict";

import Backbone from 'backbone';
import BackboneButtercup from 'app/lib/backbone.buttercup';
import Groups from 'app/collections/groups';

export default Backbone.Model.extend({
    buttercup: new Backbone.Buttercup('groups'),
    initialize: function(model) {
        if (model && model.groups) {
            this.groups = new Groups(model.groups, {
                parentID: model.id
            });
        }
    },

    defaults: {
        'title': 'Untitled'
    },

    isTrash: function() {
        let attr = this.get("attributes");

        if (attr && "bc_group_role" in attr && attr.bc_group_role === "trash") {
            return true;
        }

        return false;
    }
});
