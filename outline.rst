=============
This is Plone
=============

Who am I
========

- Johannes Raggam
- Graz / Austria (Map)
- Plone CMS core developer
- https://github.com/thet/
- https://twitter.com/thetetet


Plone the CMS
=============

Plone is...
------------

- Enterprise Content Management System
- Open Source
- Around since 2001

- Written in Python
- Based on the Zope Application Server
- Using the ZODB - Zope Object DataBase
### Show Logos


- Excellent security record
### IMG

- Great usability
- Super flexible workflow system

- Hierarchical content organization
- In-Place editing

### VIDEO


Who uses Plone
--------------

- Architekturstiftung Österreich: Multisite with 11 individual Portals sharing one common infrastructure.

- NÖKU for all of their cultural organizations like Donau Festival, Schloss Grafenegg, Kulturbühne Baden, etc.

- Porsche Informatik for ~ 700 deployments for Porsche Car Dealers.

- TU Munich + many Universities worldwide
- eGov Solution for Swiss communities
- Amnesty International
- Clean Clothes
- FBI / USA
- CIA / USA
- NASA / USA
- Brazilian Goverment with all their sites


Plone, the Framework - Technical Overview
=========================================

- ZODB
  - Zope Object DataBase
  - BTrees based storage with a dict-like API
  - Transactional
  - Fully ACID compliant
  - Multiple Clients via ZEO
  - Replicatable via ZRS
  - "No SQL"
  - Indexing via external packages
  - Follow up: NewtDB

- ZCA - Zope Component Architecture
  - Implements some GOF Design Patterns
  - Interfaces
  - Adapters
  - Utilities
  - Component registry
  - Event emitters/subscribers
  - Increases flexibility via configurable behavior
  - Improves Code Reuse

  - Class based views are multi adapters, implementing IBrowserView and adapting the content context and a request.

- Content Types
  - Schema based
  - Behaviors can extend types with schematas or other behavior
  - Form auto generation
  - TTW Option

- Theming
  - Any view or template can be easily overloaded
  - plone.app.transformchain: rendered HTML transformation at the end of the request lifecycle.
  - Diazo: XML DSL for generating XSLT
  - plone.app.blocks site and content layouts: HTML files with ``data-tile`` attributes and values which resolve to URLs which replace the tag.
  - TTW Option

- JavaScript and CSS
  - RequireJS module definitions and dependency management
  - LESS + TTW configurable LESS variables
  - TTW (r.js + less.js) + CLI (grunt) compilation

- Buildout
- Python 2.7


Future Of Plone
===============

- Zope 4
- Python 3

- Mosaic

- JavaScript and CSS
  - Webpack
  - ES6
  - ReactJS
  - Yarn
  - SASS

- plone.restapi
  - REST API
  - JSON-LD
  - HYDRA
  - probably the most important strategical development effort

- Angular SDK
  - Based on Angular 2+
  - Uses plone.restapi

- React UI

- Guillotina

- Headless



Community and Organization
==========================

Organizational Structure
------------------------

- Plone Foundation - legal institution founded with the help of Eben Moglen

- Foundation members

Teams
-----

- Framework team
- Security team
- Release team
- UI team
- Marketing team
- core contributors
- community members
- code ownership


Contributors
------------

- 400+ core developers (-> github)
- 30 active core developers
- 500+ contributors


Sprints and Conferences
-----------------------

- Plone Conference
- Plone Symposium
- Plone Open Garden
- Many sprints per year



Tnx!
====
