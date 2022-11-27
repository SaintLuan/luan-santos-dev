// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Artigo de Blog documents */
interface PostDocumentData {
    /**
     * Título field in *Artigo de Blog*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Data de publicação field in *Artigo de Blog*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: post.publishedAt
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publishedAt: prismicT.DateField;
    /**
     * Thumbnail field in *Artigo de Blog*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: post.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail: prismicT.ImageField<never>;
    /**
     * Conteúdo field in *Artigo de Blog*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Artigo de Blog document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
/** Content for Projects documents */
interface ProjectsDocumentData {
    /**
     * Título field in *Projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Subtítulo field in *Projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * Categoria field in *Projects*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    category: prismicT.SelectField<"Web Site" | "Web App" | "Mobile App" | "HotSite / Landing Page">;
    /**
     * Descrição field in *Projects*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Link do projeto field in *Projects*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.previewUrl
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    previewUrl: prismicT.LinkField;
    /**
     * Data da publicação field in *Projects*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.publishedAt
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publishedAt: prismicT.DateField;
    /**
     * Thumbnail field in *Projects*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail: prismicT.ImageField<never>;
    /**
     * Funcionalidades field in *Projects*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.features
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    features: prismicT.RichTextField;
    /**
     * Imagens field in *Projects*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.images[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    images: prismicT.GroupField<Simplify<ProjectsDocumentDataImagesItem>>;
}
/**
 * Item in Projects → Imagens
 *
 */
export interface ProjectsDocumentDataImagesItem {
    /**
     * Screenshot do projeto field in *Projects → Imagens*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.images[].screenshot
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    screenshot: prismicT.ImageField<never>;
}
/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectsDocumentData>, "projects", Lang>;
export type AllDocumentTypes = PostDocument | ProjectsDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PostDocumentData, PostDocument, ProjectsDocumentData, ProjectsDocumentDataImagesItem, ProjectsDocument, AllDocumentTypes };
    }
}