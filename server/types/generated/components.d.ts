import type { Schema, Struct } from '@strapi/strapi';

export interface CommonBoxesText extends Struct.ComponentSchema {
  collectionName: 'components_common_boxes_texts';
  info: {
    displayName: 'BoxesText';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

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

export interface CommonIconTitleSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_common_icon_title_subtitles';
  info: {
    description: '';
    displayName: 'iconTitleSubtitle';
  };
  attributes: {
    iconImg: Schema.Attribute.Media<'images' | 'files'>;
    iconName: Schema.Attribute.String;
    subtitle: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_common_newsletters';
  info: {
    description: '';
    displayName: 'Newsletter';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Sign up'>;
    footnote: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'No spam. Just heartfelt stories, upcoming events, and offers you might           actually care about.'>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Subscribe to our newsletter and be part of the journey'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<' Stay Connected with Pakufi'>;
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
    backgroundVariation: Schema.Attribute.Enumeration<
      ['none', 'two bars', 'three bars']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    barBallColor: Schema.Attribute.Enumeration<['green', 'blue']> &
      Schema.Attribute.DefaultTo<'green'>;
    boxesText: Schema.Attribute.Component<'common.boxes-text', true>;
    collaboratorList: Schema.Attribute.Component<
      'sections.collaborator-list',
      false
    >;
    descriptionColor: Schema.Attribute.String;
    faqList: Schema.Attribute.Component<'sections.faq-section', false>;
    iconTitleSubtitle: Schema.Attribute.Component<
      'common.icon-title-subtitle',
      true
    >;
    Newsletter: Schema.Attribute.Component<'common.newsletter', false>;
    sectionSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    serviceList: Schema.Attribute.Component<'sections.service-section', false>;
    shapesVariation: Schema.Attribute.Enumeration<['none', 'one', 'two']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    teamMemberList: Schema.Attribute.Component<'sections.team-section', false>;
    TextImageButtonsComponent: Schema.Attribute.Component<
      'common.text-image-buttons',
      false
    >;
    titleColor: Schema.Attribute.String;
  };
}

export interface CommonSectionhalfbackground extends Struct.ComponentSchema {
  collectionName: 'components_common_section_half_backgrounds';
  info: {
    description: '';
    displayName: 'SectionHalfBackground';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    barBallColor2: Schema.Attribute.Enumeration<['green', 'blue']> &
      Schema.Attribute.DefaultTo<'green'>;
    boxesText: Schema.Attribute.Component<'common.boxes-text', true>;
    collaboratorList: Schema.Attribute.Component<
      'sections.collaborator-list',
      false
    >;
    descriptionColor: Schema.Attribute.String;
    faqList: Schema.Attribute.Component<'sections.faq-section', false>;
    iconTitleSubtitle: Schema.Attribute.Component<
      'common.icon-title-subtitle',
      true
    >;
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

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    seoDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    seoPreview: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    seoTitle: Schema.Attribute.String & Schema.Attribute.Required;
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
    ImagePosition: Schema.Attribute.Enumeration<['left', 'right', 'central']> &
      Schema.Attribute.DefaultTo<'right'>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Schema.Attribute.Blocks & Schema.Attribute.Required;
    textColor: Schema.Attribute.String;
  };
}

export interface SectionsCollaboratorList extends Struct.ComponentSchema {
  collectionName: 'components_sections_collaborator_lists';
  info: {
    displayName: 'collaboratorList';
  };
  attributes: {
    collaborators: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaborator.collaborator'
    >;
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

export interface SectionsIntroSinglePage extends Struct.ComponentSchema {
  collectionName: 'components_sections_intro_single_pages';
  info: {
    description: '';
    displayName: 'IntroSinglePage';
  };
  attributes: {
    mediaIntroSinglePage: Schema.Attribute.Media<
      'images' | 'files' | 'videos'
    > &
      Schema.Attribute.Required;
    richTextDescription: Schema.Attribute.Blocks & Schema.Attribute.Required;
    textCols: Schema.Attribute.Component<'common.text-image-buttons', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
      'common.boxes-text': CommonBoxesText;
      'common.cta': CommonCta;
      'common.icon-title-subtitle': CommonIconTitleSubtitle;
      'common.newsletter': CommonNewsletter;
      'common.section': CommonSection;
      'common.sectionhalfbackground': CommonSectionhalfbackground;
      'common.seo': CommonSeo;
      'common.text-image-buttons': CommonTextImageButtons;
      'sections.collaborator-list': SectionsCollaboratorList;
      'sections.faq-section': SectionsFaqSection;
      'sections.intro-single-page': SectionsIntroSinglePage;
      'sections.service-section': SectionsServiceSection;
      'sections.team-section': SectionsTeamSection;
      'static-component.hero': StaticComponentHero;
      'static-component.we-statment': StaticComponentWeStatment;
    }
  }
}
