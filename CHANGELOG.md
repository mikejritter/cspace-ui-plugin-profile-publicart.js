# Change Log

## v2.0.0

v2.0.0 adds support for CollectionSpace 6.0.

### Breaking Changes

A new field, `addrGroupList/addrGroup/addressCounty`, has been added to the record editor form for place records. This field exists in CollectionSpace 6.0, but not in older versions of CollectionSpace. To use this version of the public art profile with an older CollectionSpace server, this new field should be hidden; otherwise, if a value is entered, the record will fail to save.
