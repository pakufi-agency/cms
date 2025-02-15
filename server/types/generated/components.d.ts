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

export interface CommonSection extends Struct.ComponentSchema {
  collectionName: 'components_common_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    barBallColor: Schema.Attribute.Enumeration<['green', 'blue']> &
      Schema.Attribute.DefaultTo<'green'>;
    descriptionColor: Schema.Attribute.String;
    faqList: Schema.Attribute.Component<'sections.faq-section', false>;
    sectionSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    serviceList: Schema.Attribute.Component<'sections.service-section', false>;
    teamMemberList: Schema.Attribute.Component<'sections.team-section', false>;
    TextImageButtonsComponent: Schema.Attribute.Component<
      'common.text-image-buttons',
      false
    >;
    titleColor: Schema.Attribute.String;
  };
}

export interface CommonTextImageButtons extends Struct.ComponentSchema {
  collectionName: 'components_common_text_image_buttons';
  info: {
    description: '';
    displayName: 'textImageButtons';
  };
  attributes: {
    buttonOneLabel: Schema.Attribute.String;
    buttonOneLink: Schema.Attribute.String;
    buttonTwoLabel: Schema.Attribute.String;
    buttonTwoLink: Schema.Attribute.String;
    ImagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    description: '';
    displayName: 'faqList';
  };
  attributes: {
    question_answers: Schema.Attribute.Relation<
      'oneToMany',
      'api::question-answer.question-answer'
    >;
  };
}

export interface SectionsServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_sections';
  info: {
    description: '';
    displayName: 'serviceList';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface SectionsTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_sections';
  info: {
    description: '';
    displayName: 'teamMemberList';
  };
  attributes: {
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
    descriptionRichText: Schema.Attribute.Blocks;
    mediaHero: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
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
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    statmentOne: Schema.Attribute.String & Schema.Attribute.Required;
    statmentThree: Schema.Attribute.String & Schema.Attribute.Required;
    statmentTwo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.cta': CommonCta;
      'common.section': CommonSection;
      'common.text-image-buttons': CommonTextImageButtons;
      'sections.faq-section': SectionsFaqSection;
      'sections.service-section': SectionsServiceSection;
      'sections.team-section': SectionsTeamSection;
      'static-component.hero': StaticComponentHero;
      'static-component.we-statment': StaticComponentWeStatment;
    }
  }
}
