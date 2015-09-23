if (Meteor.isClient) {
  Template.migration.rendered = function () {
    $("#delta-migration").append("<script type='text/javascript' src='https://public.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 982px; height: 742px;'><noscript><a href='#'><img alt='Sheet 4 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Mi&#47;MigrationsmapsDRAFT&#47;Sheet4&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='982' height='742' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='MigrationsmapsDRAFT&#47;Sheet4' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Mi&#47;MigrationsmapsDRAFT&#47;Sheet4&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /><param name='showTabs' value='y' /><param name='bootstrapWhenNotified' value='true' /></object></div>")
  };
  Template.unemploymentCalifornia.rendered = function () {
    $("#unemployment-california").append("<script type='text/javascript' src='https://public.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 982px; height: 742px;'><noscript><a href='#'><img alt='visits per bed by city ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CA&#47;CAPopulationHealth0923One&#47;visitsperbedbycity&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='982' height='742' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='CAPopulationHealth0923One&#47;visitsperbedbycity' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CA&#47;CAPopulationHealth0923One&#47;visitsperbedbycity&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /><param name='showTabs' value='y' /><param name='bootstrapWhenNotified' value='true' /></object></div>")
  };
  Template.unemploymentInsurance.rendered = function () {
    $("#unemployment-california").append("<script type='text/javascript' src='https://public.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 1804px; height: 869px;'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Un&#47;Unemploymentmap_0&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='1804' height='869' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='Unemploymentmap_0&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Un&#47;Unemploymentmap_0&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /><param name='showTabs' value='y' /><param name='bootstrapWhenNotified' value='true' /></object></div>")
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
