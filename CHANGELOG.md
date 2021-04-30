# Change Log

## v3.0.0

### Breaking Changes

- v3.0.0 requires cspace-ui version 6. On the record editor form for Object records, the annotation field group (`annotationGroupList`) has been added. These fields are defined in cspace-ui version 6.0.0, but not in prior versions. To use this version of cspace-ui-plugin-profile-publicart with an older version of cspace-ui, this field group should be hidden; otherwise, any values entered will not be saved.

## v2.0.0

v2.0.0 adds support for CollectionSpace 6.0.

### Breaking Changes

- v2.0.0 requires cspace-ui version 4. If you've customized this profile, see the cspace-ui 4.0.0 change log for configuration changes that may be needed.

- Place record:
  - A new field, `addrGroupList/addrGroup/addressCounty`, has been added to the record editor form. This field exists in CollectionSpace 6.0, but not in older versions of CollectionSpace. To use this version of the public art profile with an older CollectionSpace server, this new field should be hidden; otherwise, if a value is entered, the record will fail to save.
