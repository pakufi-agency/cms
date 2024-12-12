import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_sections';
  info: {
    description: '';
    displayName: 'serviceSection';
  };
  attributes: {
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface SectionsTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_sections';
  info: {
    description: '';
    displayName: 'teamSection';
  };
  attributes: {
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
  };
}

export interface StaticComponentHero extends Struct.ComponentSchema {
  collectionName: 'components_static_component_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticComponentWeStatment extends Struct.ComponentSchema {
  collectionName: 'components_static_component_we_statments';
  info: {
    description: '';
    displayName: 'weStatment';
  };
  attributes: {
    statmentOne: Schema.Attribute.String & Schema.Attribute.Required;
    statmentThree: Schema.Attribute.String & Schema.Attribute.Required;
    statmentTwo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.service-section': SectionsServiceSection;
      'sections.team-section': SectionsTeamSection;
      'static-component.hero': StaticComponentHero;
      'static-component.we-statment': StaticComponentWeStatment;
    }
  }
}
