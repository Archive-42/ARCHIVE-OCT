{% ifversion ghes = 3.0 or ghae %}
{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} for organization-owned repositories is currently in beta and subject to change.

{% endnote %}

{% endif %}
{% ifversion ghes > 3.0 %}

{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} was in beta in {% data variables.product.prodname_ghe_server %} 3.0. For the generally available release of {% data variables.product.prodname_secret_scanning %}, upgrade to the latest release of {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{% endif %}
