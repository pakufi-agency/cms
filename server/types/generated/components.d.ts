import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCta extends Struct.ComponentSchema {
  collectionName: 'components_common_ctas';
  info: {
    description: '';
    displayName: 'cta';
  };
  attributes: {
    buttonCtaOneLabel: Schema.Attribute.String & Schema.Attribute.Required;
    buttonCtaOneLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonCtaTwoLabel: Schema.Attribute.String;
    buttonCtaTwoLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    isBig: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonTextImageButtons extends Struct.ComponentSchema {
  collectionName: 'components_common_text_image_buttons';
  info: {
    displayName: 'textImageButtons';
  };
  attributes: {
    buttonOneLabel: Schema.Attribute.String;
    buttonOneLink: Schema.Attribute.String;
    buttonTwoLabel: Schema.Attribute.String;
    buttonTwoLink: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    description: '';
    displayName: 'faqSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    question_answers: Schema.Attribute.Relation<
      'oneToMany',
      'api::question-answer.question-answer'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String & Schema.Attribute.Required;
    descriptionHero: Schema.Attribute.Text & Schema.Attribute.Required;
    imageHero: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
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
    backgroundImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    statmentOne: Schema.Attribute.String & Schema.Attribute.Required;
    statmentThree: Schema.Attribute.String & Schema.Attribute.Required;
    statmentTwo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.cta': CommonCta;
      'common.text-image-buttons': CommonTextImageButtons;
      'sections.faq-section': SectionsFaqSection;
      'sections.service-section': SectionsServiceSection;
      'sections.team-section': SectionsTeamSection;
      'static-component.hero': StaticComponentHero;
      'static-component.we-statment': StaticComponentWeStatment;
    }
  }
}
