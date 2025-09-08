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

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<['none', 'btn-shining']>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonCard extends Struct.ComponentSchema {
  collectionName: 'components_common_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', true>;
    cardStyle: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
    iconAsImg: Schema.Attribute.Media<'images' | 'files'>;
    iconAsText: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface CommonLinearStep extends Struct.ComponentSchema {
  collectionName: 'components_common_linear_steps';
  info: {
    displayName: 'linearStep';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    collaborators: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaborator.collaborator'
    >;
    descriptionColor: Schema.Attribute.String;
    iconTitleSubtitle: Schema.Attribute.Component<
      'common.icon-title-subtitle',
      true
    >;
    mentors: Schema.Attribute.Relation<'oneToMany', 'api::mentor.mentor'>;
    mentorship_programs: Schema.Attribute.Relation<
      'oneToMany',
      'api::mentorship-program.mentorship-program'
    >;
    Newsletter: Schema.Attribute.Component<'common.newsletter', false>;
    price_packages: Schema.Attribute.Relation<
      'oneToMany',
      'api::price-package.price-package'
    >;
    question_answers: Schema.Attribute.Relation<
      'oneToMany',
      'api::question-answer.question-answer'
    >;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    shapesVariation: Schema.Attribute.Enumeration<['none', 'one', 'two']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    subtitle: Schema.Attribute.String;
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    TextBlock: Schema.Attribute.Component<'common.boxes-text', false>;
    TextImageButtonsComponent: Schema.Attribute.Component<
      'common.text-image-buttons',
      false
    >;
    timelineSection: Schema.Attribute.Component<
      'sections.project-steps',
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
    collaborators: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaborator.collaborator'
    >;
    descriptionColor: Schema.Attribute.String;
    iconTitleSubtitle: Schema.Attribute.Component<
      'common.icon-title-subtitle',
      true
    >;
    mentors: Schema.Attribute.Relation<'oneToMany', 'api::mentor.mentor'>;
    mentorship_programs: Schema.Attribute.Relation<
      'oneToMany',
      'api::mentorship-program.mentorship-program'
    >;
    price_packages: Schema.Attribute.Relation<
      'oneToMany',
      'api::price-package.price-package'
    >;
    sectionSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    TextImageButtonsComponent: Schema.Attribute.Component<
      'common.text-image-buttons',
      false
    >;
    timelineSection: Schema.Attribute.Component<
      'sections.project-steps',
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
    buttonStyle: Schema.Attribute.Enumeration<['none', 'btn-shining']>;
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

export interface SectionsMentorList extends Struct.ComponentSchema {
  collectionName: 'components_sections_mentor_lists';
  info: {
    displayName: 'MentorList';
  };
  attributes: {
    mentors: Schema.Attribute.Relation<'oneToMany', 'api::mentor.mentor'>;
  };
}

export interface SectionsMentorshipPackageList extends Struct.ComponentSchema {
  collectionName: 'components_sections_mentorship_package_lists';
  info: {
    displayName: 'MentorshipPackageList';
  };
  attributes: {
    mentorship_programs: Schema.Attribute.Relation<
      'oneToMany',
      'api::mentorship-program.mentorship-program'
    >;
  };
}

export interface SectionsPricePackageList extends Struct.ComponentSchema {
  collectionName: 'components_sections_price_package_lists';
  info: {
    displayName: 'pricePackageList';
  };
  attributes: {
    price_packages: Schema.Attribute.Relation<
      'oneToMany',
      'api::price-package.price-package'
    >;
  };
}

export interface SectionsProjectSteps extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_steps';
  info: {
    description: '';
    displayName: 'TImelineAndText';
  };
  attributes: {
    sideText: Schema.Attribute.Blocks;
    timelineAlign: Schema.Attribute.Enumeration<['center', 'left', 'right']>;
    timelineStep: Schema.Attribute.Component<'common.linear-step', true>;
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
    Button: Schema.Attribute.Component<'common.button', true>;
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

export interface StaticComponentWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_static_component_what_we_dos';
  info: {
    displayName: 'WhatWeDo';
  };
  attributes: {
    pakufiOffers: Schema.Attribute.Component<'common.card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.boxes-text': CommonBoxesText;
      'common.button': CommonButton;
      'common.card': CommonCard;
      'common.cta': CommonCta;
      'common.icon-title-subtitle': CommonIconTitleSubtitle;
      'common.linear-step': CommonLinearStep;
      'common.newsletter': CommonNewsletter;
      'common.section': CommonSection;
      'common.sectionhalfbackground': CommonSectionhalfbackground;
      'common.seo': CommonSeo;
      'common.text-image-buttons': CommonTextImageButtons;
      'sections.collaborator-list': SectionsCollaboratorList;
      'sections.faq-section': SectionsFaqSection;
      'sections.intro-single-page': SectionsIntroSinglePage;
      'sections.mentor-list': SectionsMentorList;
      'sections.mentorship-package-list': SectionsMentorshipPackageList;
      'sections.price-package-list': SectionsPricePackageList;
      'sections.project-steps': SectionsProjectSteps;
      'sections.service-section': SectionsServiceSection;
      'sections.team-section': SectionsTeamSection;
      'static-component.hero': StaticComponentHero;
      'static-component.we-statment': StaticComponentWeStatment;
      'static-component.what-we-do': StaticComponentWhatWeDo;
    }
  }
}
