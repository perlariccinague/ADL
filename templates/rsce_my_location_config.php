<?php
return array(
    'label' => array('Standorte', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'name' => array(
            'label' => array('Name', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'address' => array(
            'label' => array('Adresse', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
    ),
);







