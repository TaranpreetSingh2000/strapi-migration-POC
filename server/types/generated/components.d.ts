import type { Schema, Struct } from '@strapi/strapi';

export interface AccordionAccordion extends Struct.ComponentSchema {
  collectionName: 'components_accordion_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface BlogBlogComponent extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_components';
  info: {
    displayName: 'Blog component first section';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richtextContent: Schema.Attribute.Blocks;
    sectionHeading: Schema.Attribute.String;
    tableRichtextContent: Schema.Attribute.RichText;
    teaserView: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
  };
}

export interface BlogBlogSecondSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_second_sections';
  info: {
    displayName: 'Blog second section';
  };
  attributes: {
    accordionView: Schema.Attribute.Enumeration<['column', 'grid']> &
      Schema.Attribute.DefaultTo<'column'>;
    faqSection: Schema.Attribute.Component<'accordion.accordion', true>;
    richtextContent: Schema.Attribute.Blocks;
    sectionHeading: Schema.Attribute.String;
  };
}

export interface BlogMainBlogDetailPage extends Struct.ComponentSchema {
  collectionName: 'components_blog_main_blog_detail_pages';
  info: {
    displayName: 'Main Blog Detail page';
  };
  attributes: {
    blogDetailConclusionSection: Schema.Attribute.Component<
      'blog.blog-second-section',
      false
    >;
    blogDetailUpperSection: Schema.Attribute.Component<
      'blog.blog-component',
      false
    >;
    blogPostedTime: Schema.Attribute.Date;
    blogUpdatedTime: Schema.Attribute.Date;
    disclaimerSectionHeading: Schema.Attribute.String;
    disclaimerText: Schema.Attribute.Blocks;
  };
}

export interface SeoSeoComponent extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_components';
  info: {
    displayName: 'SEO component';
  };
  attributes: {
    browserTitle: Schema.Attribute.Text;
    displayTitle: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaKeywords: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    ogMedia: Schema.Attribute.Media<'images'>;
    pageTitle: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accordion.accordion': AccordionAccordion;
      'blog.blog-component': BlogBlogComponent;
      'blog.blog-second-section': BlogBlogSecondSection;
      'blog.main-blog-detail-page': BlogMainBlogDetailPage;
      'seo.seo-component': SeoSeoComponent;
    }
  }
}
