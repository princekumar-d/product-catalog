/// <reference types="next" />
/// <reference types="next/types/global" />


declare module '*.module.css';
declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const Schema: DocumentNode;

  export = Schema;
}