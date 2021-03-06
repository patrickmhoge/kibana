/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import React from 'react';

import { EuiSpacer } from '@elastic/eui';

import { WORKPLACE_SEARCH_PLUGIN } from '../../../../../common/constants';
import { getWorkplaceSearchUrl } from '../../../shared/enterprise_search_url';
import { SideNav, SideNavLink } from '../../../shared/layout';

import { GroupSubNav } from '../../views/groups/components/group_sub_nav';
import { NAV } from '../../constants';

import {
  ORG_SOURCES_PATH,
  SOURCES_PATH,
  SECURITY_PATH,
  ROLE_MAPPINGS_PATH,
  GROUPS_PATH,
  ORG_SETTINGS_PATH,
} from '../../routes';

export const WorkplaceSearchNav: React.FC = () => {
  // TODO: icons
  return (
    <SideNav product={WORKPLACE_SEARCH_PLUGIN}>
      <SideNavLink to="/" isRoot>
        {NAV.OVERVIEW}
      </SideNavLink>
      <SideNavLink isExternal to={getWorkplaceSearchUrl(ORG_SOURCES_PATH)}>
        {NAV.SOURCES}
      </SideNavLink>
      <SideNavLink to={GROUPS_PATH} subNav={<GroupSubNav />}>
        {NAV.GROUPS}
      </SideNavLink>
      <SideNavLink isExternal to={getWorkplaceSearchUrl(`#${ROLE_MAPPINGS_PATH}`)}>
        {NAV.ROLE_MAPPINGS}
      </SideNavLink>
      <SideNavLink isExternal to={getWorkplaceSearchUrl(`#${SECURITY_PATH}`)}>
        {NAV.SECURITY}
      </SideNavLink>
      <SideNavLink isExternal to={getWorkplaceSearchUrl(ORG_SETTINGS_PATH)}>
        {NAV.SETTINGS}
      </SideNavLink>
      <EuiSpacer />
      <SideNavLink isExternal to={getWorkplaceSearchUrl(`#${SOURCES_PATH}`)}>
        {NAV.PERSONAL_DASHBOARD}
      </SideNavLink>
    </SideNav>
  );
};
